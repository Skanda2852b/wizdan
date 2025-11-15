import IndustryCard from '@/components/IndustryCard';

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Transform patient care and healthcare operations with tailored Salesforce solutions for the healthcare industry."
  },
  {
    name: "Financial Services",
    slug: "financial-services",
    description: "Drive digital transformation in banking, insurance, and wealth management with Financial Services Cloud."
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    description: "Optimize supply chain, production, and customer relationships with Manufacturing Cloud solutions."
  },
  {
    name: "Education",
    slug: "education",
    description: "Enhance student engagement and institutional efficiency with Education Cloud implementations."
  },
  {
    name: "Automobile",
    slug: "automobile",
    description: "Revolutionize automotive sales, service, and customer experience with industry-specific solutions."
  }
];

export default function Industries() {
  return (
    <div className=" bg-white">
  {/* Hero Section */}
  <section className="bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Industries We Serve</h1>
        <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
          Tailored Salesforce solutions for your specific industry challenges and opportunities.
        </p>
      </div>
    </div>
  </section>

  {/* Industries Grid */}
  <section className="py-20 md:py-28 bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Industry Expertise
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We understand the unique challenges and opportunities in your industry
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <IndustryCard key={industry.slug} industry={industry} />
        ))}
      </div>
    </div>
  </section>

  {/* Industry Benefits */}
  <section className="py-20 md:py-28 bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Industry-Specific Solutions Matter
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We deliver tailored Salesforce solutions that address the unique challenges and opportunities of your industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Deep Industry Knowledge</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We understand the regulatory requirements, business processes, and customer expectations specific to your industry.
            </p>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Best Practices</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We implement industry best practices and proven methodologies that have delivered results for similar organizations.
            </p>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Customized Solutions</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We tailor Salesforce solutions to address your specific industry challenges and leverage your unique opportunities.
            </p>
          </div>

          <div className="bg-linear-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Proven Results</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our track record includes successful implementations across multiple industries with measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-amber-200">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-3">12+</div>
            <p className="text-gray-700 font-semibold text-lg">Industries Served</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-3">50+</div>
            <p className="text-gray-700 font-semibold text-lg">Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-3">16+</div>
            <p className="text-gray-700 font-semibold text-lg">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-3">98%</div>
            <p className="text-gray-700 font-semibold text-lg">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-20 md:py-28 bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Don't See Your Industry?</h2>
      <p className="text-2xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed">
        We work across various sectors and can customize solutions for your specific needs.
      </p>
      <a href="/contact" className="bg-amber-500 text-black  rounded-2xl font-bold text-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 inline-block">
        Contact Us
      </a>
    </div>
  </section>
</div>
  );
}