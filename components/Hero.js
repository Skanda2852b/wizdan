export default function Hero() {
  return (
    <section className="pt-5 pb-5 bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
  <div className="container-custom section-padding">
    <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
        Transform Your Business with <span className="text-amber-400">Salesforce</span> Excellence
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-amber-100 leading-relaxed max-w-3xl mx-auto">
        We help organizations design, implement, and optimize Salesforce solutions that drive growth and innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a 
          href="/services" 
          className="bg-amber-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 border-2 border-amber-500 min-w-[200px]"
        >
          Explore Services
        </a>
        <a 
          href="/contact" 
          className="bg-transparent text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-2xl border-2 border-white hover:border-amber-400 min-w-[200px]"
        >
          Talk to an Expert
        </a>
      </div>
      
      {/* Trust indicators */}
      <div className="mt-16 pt-8 border-t border-amber-800/30">
        <p className="text-amber-200 text-lg mb-6 font-semibold">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="text-amber-300 font-bold text-xl">Fortune 500</div>
          <div className="text-amber-300 font-bold text-xl">Tech Giants</div>
          <div className="text-amber-300 font-bold text-xl">Startups</div>
          <div className="text-amber-300 font-bold text-xl">Enterprises</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}