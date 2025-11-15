import { notFound } from 'next/navigation';

// This would typically come from MongoDB
const servicesData = {
  'strategic-advisory': {
    title: 'Strategic Advisory',
    description: 'Expert guidance to align Salesforce with your business goals and maximize ROI through strategic planning and best practices.',
    overview: 'Wizdin Solutions offers strategic advisory to ensure clients derive maximum value from Salesforce. Our experts tailor strategies and frameworks that align with your business goals, ensuring long-term scalability and performance.',
    keyActivities: [
      'Salesforce Strategy Development',
      'Business Process Analysis',
      'ROI and Value Realization Planning',
      'Governance Framework Design',
      'Roadmap Creation and Prioritization'
    ],
    benefits: [
      'Alignment of Salesforce with business objectives',
      'Increased ROI and user adoption',
      'Scalable and future-proof architecture',
      'Reduced total cost of ownership',
      'Improved decision-making with data-driven insights'
    ]
  },
  'implementation': {
    title: 'Implementation',
    description: 'End-to-end Salesforce implementation services tailored to your specific business requirements and processes.',
    overview: 'Wizdin Solutions offers implementation to ensure clients derive maximum value from Salesforce. Our experts tailor strategies and frameworks that align with your business goals, ensuring long-term scalability and performance.',
    keyActivities: [
      'Requirements Gathering and Analysis',
      'Solution Design and Configuration',
      'Custom Development and Integration',
      'Data Migration and Cleansing',
      'Testing and Quality Assurance'
    ],
    benefits: [
      'Faster time to value',
      'Reduced implementation risks',
      'Best practices implementation',
      'Seamless user adoption',
      'Comprehensive documentation'
    ]
  }
  // Add other services similarly...
};

export default function ServicePage({ params }) {
  const { service } = params;
  const serviceInfo = servicesData[service];

  if (!serviceInfo) {
    notFound();
  }

  return (
    <div className="pt-5 bg-white">
  {/* Hero Section */}
  <section className="bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">{serviceInfo.title}</h1>
        <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
          {serviceInfo.description}
        </p>
      </div>
    </div>
  </section>

  {/* Overview */}
  <section className="py-20 md:py-28 bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Service Overview</h2>
        <p className="text-2xl text-gray-700 leading-relaxed font-light">
          {serviceInfo.overview}
        </p>
      </div>
    </div>
  </section>

  {/* Key Activities */}
  <section className="py-20 md:py-28 bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Key Activities & Deliverables</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceInfo.keyActivities.map((activity, index) => (
            <li key={index} className="flex items-start space-x-6 group hover:translate-x-2 transition-transform duration-300">
              <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 text-xl leading-relaxed group-hover:text-amber-600 transition-colors duration-300">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  {/* Benefits */}
  <section className="py-20 md:py-28 bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Benefits for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceInfo.benefits.map((benefit, index) => (
            <div key={index} className="bg-linear-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{benefit}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Process Section */}
  <section className="py-20 md:py-28 bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Discovery & Analysis</h3>
            <p className="text-gray-700">In-depth assessment of your business needs and objectives</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Strategy & Planning</h3>
            <p className="text-gray-700">Customized solution design and implementation roadmap</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Implementation</h3>
            <p className="text-gray-700">Expert configuration, development, and deployment</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Optimization</h3>
            <p className="text-gray-700">Continuous improvement and ongoing support</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-20 md:py-28 bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Interested in {serviceInfo.title}?</h2>
      <p className="text-2xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed">
        Let's discuss how our {serviceInfo.title} service can help your business achieve its goals.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="/contact" className="bg-amber-500 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 inline-block">
          Request Consultation
        </a>
        <a href="/services" className="bg-transparent text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 border-2 border-white hover:border-amber-400">
          View All Services
        </a>
      </div>
    </div>
  </section>
</div>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = Object.keys(servicesData);
  
  return services.map((service) => ({
    service: service,
  }));
}