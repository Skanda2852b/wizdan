import CloudCard from '@/components/CloudCard';

const clouds = [
  {
    name: "Sales Cloud",
    slug: "sales-cloud",
    description: "Streamline your sales processes, improve productivity, and drive revenue growth with Sales Cloud implementation."
  },
  {
    name: "Service Cloud",
    slug: "service-cloud",
    description: "Deliver exceptional customer service with AI-powered case management and omnichannel support solutions."
  },
  {
    name: "Experience Cloud",
    slug: "experience-cloud",
    description: "Create beautiful digital experiences for your customers, partners, and employees with Experience Cloud."
  },
  {
    name: "Marketing Cloud",
    slug: "marketing-cloud",
    description: "Drive personalized customer journeys and marketing automation across all channels with Marketing Cloud."
  },
  {
    name: "CPQ",
    slug: "cpq",
    description: "Streamline your configure, price, quote processes with Salesforce CPQ for accurate and fast quoting."
  },
  {
    name: "Revenue Cloud",
    slug: "revenue-cloud",
    description: "Unify your revenue operations with automated billing, revenue recognition, and subscription management."
  },
  {
    name: "Financial Services Cloud",
    slug: "financial-services-cloud",
    description: "Transform financial services with tailored solutions for banking, insurance, and wealth management."
  },
  {
    name: "Health Cloud",
    slug: "health-cloud",
    description: "Enhance patient engagement and care coordination with Health Cloud for healthcare organizations."
  }
];

export default function Expertise() {
  return (
    <div className=" bg-white">
  {/* Hero Section */}
  <section className="pt-6 pb-6 bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Salesforce Expertise</h1>
        <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
          Deep expertise across the entire Salesforce ecosystem to drive your digital transformation.
        </p>
      </div>
    </div>
  </section>

  {/* Clouds Grid */}
  <section className="pt-6 pb-6 section-padding bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Salesforce Clouds
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We have extensive experience implementing and optimizing all major Salesforce clouds
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clouds.map((cloud) => (
          <CloudCard key={cloud.slug} cloud={cloud} />
        ))}
      </div>
    </div>
  </section>

  {/* Additional Expertise */}
  <section className="pt-6 pb-6 section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Why Choose Our Salesforce Expertise?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-amber-500/25">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Certified Experts</h3>
            <p className="text-gray-700 text-lg leading-relaxed">Our team holds 12+ Salesforce certifications across all major clouds.</p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-amber-500/25">
              <span className="text-white text-2xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Best Practices</h3>
            <p className="text-gray-700 text-lg leading-relaxed">We implement Salesforce following industry best practices and standards.</p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-amber-500/25">
              <span className="text-white text-2xl">🔄</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Continuous Learning</h3>
            <p className="text-gray-700 text-lg leading-relaxed">We stay updated with the latest Salesforce features and innovations.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-amber-200">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">16+</div>
            <p className="text-gray-700 font-semibold">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">12+</div>
            <p className="text-gray-700 font-semibold">Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">50+</div>
            <p className="text-gray-700 font-semibold">Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">98%</div>
            <p className="text-gray-700 font-semibold">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="pt-8 pb-8 section-padding bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Leverage Our Expertise?</h2>
      <p className="text-2xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed">
        Let's discuss how our deep Salesforce expertise can help you achieve your business goals.
      </p>
      <a href="/contact" className="bg-amber-500 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 inline-block">
        Talk to an Expert
      </a>
    </div>
  </section>
</div>
  );
}