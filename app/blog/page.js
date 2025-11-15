import BlogCard from '@/components/BlogCard';

async function getBlogPosts() {
  try {
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    console.log('Fetching blog posts from:', `${baseUrl}/api/blog`);
    
    const res = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Failed to fetch blog posts:', res.status, errorText);
      throw new Error(`Failed to fetch blog posts: ${res.status} ${errorText}`);
    }
    
    const data = await res.json();
    console.log('Blog posts fetched successfully:', data.posts?.length || 0);
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return empty data instead of throwing to prevent page crash
    return { posts: [], pagination: {} };
  }
}

export default async function Blog() {
  const { posts, pagination } = await getBlogPosts();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-amber-100">
              Insights, trends, and best practices in Salesforce and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <a 
              href="/blog/create" 
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-3 rounded-2xl font-bold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
            >
              Write Article
            </a>
          </div>
          
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles yet</h3>
              <p className="text-gray-600 mb-6">Be the first to share your insights!</p>
              <a href="/blog/create" className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-3 rounded-2xl font-bold hover:from-amber-500 hover:to-amber-700 transition-all duration-300">
                Write First Article
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}