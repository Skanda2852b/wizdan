'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import BlogEditor from '@/components/BlogEditor';

async function getBlogPost(id) {
  const res = await fetch(`/api/blog/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch blog post');
  }
  return await res.json();
}

export default function EditBlogPost() {
  const [post, setPost] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/auth/login');
      return;
    }
    setIsAuthenticated(true);

    // Fetch blog post data
    const fetchPost = async () => {
      try {
        const data = await getBlogPost(params.id);
        setPost(data.post);
      } catch (error) {
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [params.id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-salesforce-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button onClick={() => router.push('/blog')} className="btn-primary">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <BlogEditor post={post} />
      </div>
    </div>
  );
}