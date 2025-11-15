import { notFound } from 'next/navigation';

const cloudsData = {
  'sales-cloud': {
    name: 'Sales Cloud',
    description: 'Wizdin Solutions has deep expertise in Sales Cloud, helping organizations streamline operations and drive digital transformation. We leverage best practices, automation, and analytics to maximize Salesforce ROI.',
    overview: 'Sales Cloud is the world\'s #1 CRM solution that helps you sell smarter and faster by putting your customers at the center of everything. We help you transform your sales processes to drive productivity and growth.',
    keyFeatures: [
      'Lead and Opportunity Management',
      'Sales Process Automation',
      'AI-Powered Sales Insights',
      'Mobile Sales Enablement',
      'Sales Analytics and Reporting'
    ],
    useCases: [
      'Automating sales processes',
      'Improving sales forecasting',
      'Enhancing team collaboration',
      'Driving sales productivity',
      'Personalizing customer interactions'
    ],
    implementationApproach: 'Our Sales Cloud implementation follows a proven methodology that includes discovery, design, development, testing, and deployment phases. We focus on user adoption and continuous improvement.',
    successMetrics: [
      '40% increase in sales productivity',
      '25% improvement in forecast accuracy',
      '50% faster lead response times',
      '30% reduction in sales cycle length'
    ]
  },
  'service-cloud': {
    name: 'Service Cloud',
    description: 'Wizdin Solutions has deep expertise in Service Cloud, helping organizations streamline operations and drive digital transformation. We leverage best practices, automation, and analytics to maximize Salesforce ROI.',
    overview: 'Service Cloud empowers your service team to deliver exceptional customer service across every channel. We help you create seamless customer experiences that build loyalty and drive satisfaction.',
    keyFeatures: [
      'Omnichannel Routing',
      'AI-Powered Case Management',
      'Knowledge Base Integration',
      'Field Service Management',
      'Service Analytics and Insights'
    ],
    useCases: [
      'Centralizing customer service operations',
      'Implementing self-service portals',
      'Automating case routing and assignment',
      'Enabling field service management',
      'Improving first contact resolution rates'
    ],
    implementationApproach: 'Our Service Cloud implementation focuses on creating seamless customer experiences through intelligent routing, knowledge management, and omnichannel support capabilities.',
    successMetrics: [
      '35% improvement in customer satisfaction',
      '40% faster case resolution',
      '50% reduction in service costs',
      '60% increase in agent productivity'
    ]
  }
  // Add other clouds similarly...
};

export default function CloudPage({ params }) {
  const { cloud } = params;
  const cloudInfo = cloudsData[cloud];

  if (!cloudInfo) {
    notFound();
  }

  return (
    <div className="pt-5 bg-white">
  {/* Hero Section */}
  <section className="bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">{cloudInfo.name}</h1>
        <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
          {cloudInfo.description}
        </p>
      </div>
    </div>
  </section>

  {/* Overview */}
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Overview</h2>
        <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-light">
          {cloudInfo.overview}
        </p>
      </div>
    </div>
  </section>

  {/* Key Features */}
  <section className="section-padding bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cloudInfo.keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Use Cases */}
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Common Use Cases</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cloudInfo.useCases.map((useCase, index) => (
            <li key={index} className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
              <div className="w-8 h-8 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 text-xl leading-relaxed group-hover:text-amber-600 transition-colors duration-300">{useCase}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  {/* Implementation Approach */}
  <section className="section-padding bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Our Implementation Approach</h2>
        <p className="text-2xl text-gray-700 leading-relaxed font-light">
          {cloudInfo.implementationApproach}
        </p>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Discovery & Planning</h3>
            <p className="text-gray-700">In-depth analysis of your business requirements and objectives</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Custom Implementation</h3>
            <p className="text-gray-700">Tailored configuration and development to meet your specific needs</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Optimization & Support</h3>
            <p className="text-gray-700">Continuous improvement and ongoing maintenance for maximum ROI</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Success Metrics */}
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Success Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cloudInfo.successMetrics.map((metric, index) => (
            <div key={index} className="bg-linear-to-br from-amber-50 to-white rounded-2xl p-8 text-center border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="section-padding bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Implement {cloudInfo.name}?</h2>
      <p className="text-2xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed">
        Let's discuss how {cloudInfo.name} can transform your business operations.
      </p>
      <a href="/contact" className="bg-amber-500 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 inline-block">
        Get Started
      </a>
    </div>
  </section>
</div>
  );
}

export async function generateStaticParams() {
  const clouds = Object.keys(cloudsData);
  
  return clouds.map((cloud) => ({
    cloud: cloud,
  }));
}