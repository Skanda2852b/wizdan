import { notFound } from 'next/navigation';

async function getBlogPost(slug) {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/blog/${slug}`, {
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }
    
    const data = await res.json();
    return data.post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="text-xl text-blue-100">
              By {post.authorName} • {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-blue max-w-none">
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-salesforce-light text-salesforce-blue rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  // Generate static params for published posts
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/blog`);
    if (!res.ok) return [];
    
    const data = await res.json();
    return data.posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    return [];
  }
}