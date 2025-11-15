'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogEditor({ post = null }) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
    featuredImage: '',
    published: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const userObj = JSON.parse(userData);
        console.log('User data from localStorage:', userObj);
        
        // If name is missing, try to get it from email or set default
        if (!userObj.name) {
          userObj.name = userObj.email?.split('@')[0] || 'User';
          console.log('Name was missing, set to:', userObj.name);
        }
        
        setUser(userObj);
      } catch (error) {
        console.error('Error parsing user data:', error);
        setError('Please log in to create blog posts');
      }
    } else {
      setError('Please log in to create blog posts');
    }

    // Set initial form data if editing
    if (post) {
      setFormData({
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        tags: post.tags ? post.tags.join(', ') : '',
        featuredImage: post.featuredImage || '',
        published: post.published || false,
      });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setError('Please log in to create blog posts');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      // Ensure we have authorName - use email if name is missing
      const authorName = user.name || user.email?.split('@')[0] || 'Anonymous';
      
      const postData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        tags,
        featuredImage: formData.featuredImage,
        published: formData.published,
        authorId: user._id,
        authorName: authorName,
      };

      console.log('Sending blog post data:', postData);

      let response;
      let data;

      if (post) {
        // Update existing post
        response = await fetch(`/api/blog/${post._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
      } else {
        // Create new post
        response = await fetch('/api/blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });
      }

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      // Check if response has content before trying to parse JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseText = await response.text();
        console.log('Raw response text:', responseText);
        
        if (responseText) {
          try {
            data = JSON.parse(responseText);
          } catch (parseError) {
            console.error('JSON parse error:', parseError);
            setError('Server returned invalid JSON response');
            return;
          }
        } else {
          // Empty response but status is ok
          if (response.ok) {
            setSuccess('Blog post created successfully!');
            setTimeout(() => {
              router.push('/blog');
              router.refresh();
            }, 2000);
            return;
          } else {
            setError(`Server returned empty response with status: ${response.status}`);
            return;
          }
        }
      } else {
        // Non-JSON response
        const text = await response.text();
        console.error('Non-JSON response:', text);
        setError(`Server error: ${response.status} ${response.statusText}`);
        return;
      }

      if (response.ok) {
        setSuccess(post ? 'Blog post updated successfully!' : 'Blog post created successfully!');
        
        // Redirect to blog page after short delay
        setTimeout(() => {
          router.push('/blog');
          router.refresh();
        }, 2000);
      } else {
        setError(data.error || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔒</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication Required</h2>
        <p className="text-gray-600 mb-6">Please log in to create blog posts.</p>
        <a 
          href="/auth/login" 
          className="bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-3 px-6 rounded-2xl hover:from-amber-500 hover:to-amber-700 transition-all duration-300 inline-block"
        >
          Log In
        </a>
      </div>
    );
  }

  const displayName = user.name || user.email?.split('@')[0] || 'User';

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900">
          {post ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <span>Posting as {displayName}</span>
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-6">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
            placeholder="Enter blog post title"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt *
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            required
            rows={3}
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 resize-none"
            placeholder="Brief description of your blog post"
            maxLength={300}
          />
          <p className="text-sm text-gray-500 mt-1">
            {formData.excerpt.length}/300 characters
          </p>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={12}
            value={formData.content}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300 resize-none"
            placeholder="Write your blog post content here..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
              placeholder="salesforce, crm, digital-transformation"
            />
            <p className="text-sm text-gray-500 mt-1">
              Separate tags with commas
            </p>
          </div>

          <div>
            <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image URL
            </label>
            <input
              type="url"
              id="featuredImage"
              name="featuredImage"
              value={formData.featuredImage}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="published"
            name="published"
            checked={formData.published}
            onChange={handleChange}
            className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
          />
          <label htmlFor="published" className="ml-2 text-sm font-medium text-gray-700">
            Publish this post immediately
          </label>
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-3 px-8 rounded-2xl hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
          </button>
          
          <button
            type="button"
            onClick={() => router.push('/blog')}
            className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-2xl hover:bg-gray-300 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}