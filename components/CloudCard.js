import Link from 'next/link';

export default function CloudCard({ cloud }) {
  return (
   <div className="group relative bg-gradient-to-br from-white via-amber-25 to-amber-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 p-8 border border-amber-100 hover:border-amber-200 hover:scale-[1.02] overflow-hidden">
  {/* Background gradient effect on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
  {/* Logo Container with enhanced design */}
  <div className="relative z-10 w-15 h-15 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-amber-500/30">
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
    <span className="text-white font-black text-4xl tracking-wider drop-shadow-sm">🎓</span>
  </div>
  
  {/* Content with enhanced typography */}
  <div className="relative z-10">
    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-500 leading-tight">
      {cloud.name}
    </h3>
    <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
      {cloud.description}
    </p>
  </div>
  
  {/* Enhanced CTA Link */}
  <div className="relative z-10">
    <Link 
      href={`/expertise/${cloud.slug}`}
      className="inline-flex items-center bg-gradient-to-r from-black via-gray-900 to-black text-white px-8 py-4 rounded-2xl font-bold hover:from-amber-500 hover:to-amber-600 hover:text-black transition-all duration-500 group/btn shadow-lg hover:shadow-2xl hover:shadow-amber-500/25 border-2 border-transparent hover:border-amber-500"
    >
      <span className="mr-3">Explore {cloud.name}</span>
      <svg className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  </div>

  {/* Subtle corner accent */}
  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-tr-3xl"></div>
</div>
  );
}