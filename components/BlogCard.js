import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {post.featuredImage && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>By {post.authorName}</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-salesforce-blue transition-colors duration-300">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            href={`/blog/${post.slug}`}
            className="text-salesforce-blue font-semibold hover:text-salesforce-dark transition-colors duration-300 inline-flex items-center"
          >
            Read More
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex space-x-1">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs bg-salesforce-light text-salesforce-blue rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}