import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

// Get single blog post by ID or slug
export async function GET(request, { params }) {
  try {
    await dbConnect();
    
    const { id } = params;

    let post;
    
    // Check if it's a MongoDB ID or slug
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      post = await BlogPost.findById(id).populate('author', 'name email');
    } else {
      post = await BlogPost.findOne({ slug: id, published: true }).populate('author', 'name email');
    }

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Blog post fetch error:', error);
    return NextResponse.json(
      { error: 'Error fetching blog post' },
      { status: 500 }
    );
  }
}

// Update blog post
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    
    const { id } = params;
    const updateData = await request.json();

    // If title is being updated, update slug too
    if (updateData.title) {
      updateData.slug = updateData.title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    }

    updateData.updatedAt = new Date();

    const post = await BlogPost.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    ).populate('author', 'name email');

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Blog post updated successfully', post }
    );
  } catch (error) {
    console.error('Blog post update error:', error);
    return NextResponse.json(
      { error: 'Error updating blog post' },
      { status: 500 }
    );
  }
}

// Delete blog post
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    
    const { id } = params;

    const post = await BlogPost.findByIdAndDelete(id);

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Blog post deleted successfully' }
    );
  } catch (error) {
    console.error('Blog post deletion error:', error);
    return NextResponse.json(
      { error: 'Error deleting blog post' },
      { status: 500 }
    );
  }
}