import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="pt-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-amber-100 hover:border-amber-300/30 group hover:scale-[1.02]">
  {/* Icon Container */}
  <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
      <div className="w-4 h-4 bg-amber-600 rounded-md"></div>
    </div>
  </div>
  
  {/* Content */}
  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-amber-600 transition-colors duration-300">
    {service.title}
  </h3>
  <p className="text-gray-700 mb-6 leading-relaxed">
    {service.description}
  </p>
  
  {/* CTA Link */}
  <Link 
    href={`/services/${service.slug}`}
    className="inline-flex items-center text-black font-bold hover:text-amber-600 transition-all duration-300 group/link"
  >
    Learn More
    <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </Link>
</div>
  );
}