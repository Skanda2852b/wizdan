import Link from 'next/link';

export default function IndustryCard({ industry }) {
  const industryIcons = {
    healthcare: '🏥',
    education: '🎓',
    manufacturing: '🏭',
    'financial-services': '💼',
    automobile: '🚗',
  };

  return (
    <div className="pt-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-amber-100 group hover:scale-[1.02]">
  {/* Icon Container */}
  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500 flex justify-center">
    <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/25">
      {industryIcons[industry.slug] || '🏢'}
    </div>
  </div>
  
  {/* Content */}
  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-amber-600 transition-colors duration-300 text-center">
    {industry.name}
  </h3>
  <p className="text-gray-700 mb-6 leading-relaxed text-center">
    {industry.description}
  </p>
  
  {/* CTA Link */}
  <Link 
    href={`/industries/${industry.slug}`}
    className="inline-flex items-center justify-center w-full bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-500 hover:text-black transition-all duration-300 group/link shadow-md hover:shadow-lg"
  >
    See Case Studies
    <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </Link>
</div>
  );
}