// Handle POST request - create new blog post
export async function POST(request) {
  try {
    console.log('POST /api/blog - Creating new blog post...');
    await dbConnect();
    
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing request JSON:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }
    
    const { title, excerpt, content, tags, featuredImage, authorId, authorName, published } = body;

    console.log('Received blog post data:', { 
      title, 
      excerpt, 
      authorId, 
      authorName,
      published 
    });

    // Validate required fields with better error messages
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }
    if (!excerpt) {
      return NextResponse.json({ error: 'Excerpt is required' }, { status: 400 });
    }
    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }
    if (!authorId) {
      return NextResponse.json({ error: 'Author ID is required. Please make sure you are logged in.' }, { status: 400 });
    }
    if (!authorName) {
      return NextResponse.json({ error: 'Author name is required. Please make sure you are logged in.' }, { status: 400 });
    }

    // Create slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    // Check if slug already exists
    const existingPost = await BlogPost.findOne({ slug });
    if (existingPost) {
      return NextResponse.json(
        { error: 'A blog post with this title already exists' },
        { status: 400 }
      );
    }

    const blogPostData = {
      title,
      slug,
      excerpt,
      content,
      tags: tags || [],
      featuredImage: featuredImage || '',
      author: authorId,
      authorName,
      published: published || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // If published, set publishedAt
    if (blogPostData.published) {
      blogPostData.publishedAt = new Date();
    }

    console.log('Creating blog post with data:', blogPostData);

    const blogPost = await BlogPost.create(blogPostData);

    console.log('Blog post created successfully:', blogPost._id);

    // Ensure we return a proper JSON response
    const responseData = { 
      message: 'Blog post created successfully', 
      post: {
        ...blogPost.toObject(),
        _id: blogPost._id.toString()
      }
    };

    return new Response(JSON.stringify(responseData), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Blog post creation error:', error);
    
    // Ensure error response is also proper JSON
    return new Response(JSON.stringify({ 
      error: 'Error creating blog post: ' + error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}