import { notFound } from 'next/navigation';

const industriesData = {
  'healthcare': {
    name: 'Healthcare',
    description: 'Wizdin Solutions empowers the Healthcare industry with Salesforce-driven digital transformation. From customer engagement to analytics, our tailored solutions address real-world challenges and enhance operational efficiency.',
    challenges: [
      'Patient engagement and communication',
      'Care coordination across departments',
      'Regulatory compliance and reporting',
      'Data security and privacy concerns',
      'Operational efficiency and cost management'
    ],
    solutions: [
      'Health Cloud implementation',
      'Patient relationship management',
      'Care coordination platforms',
      'Compliance and reporting automation',
      'Mobile health applications'
    ],
    benefits: [
      'Improved patient satisfaction scores',
      'Enhanced care team collaboration',
      'Reduced administrative costs',
      'Better compliance management',
      'Increased operational efficiency'
    ],
    caseStudies: [
      {
        title: 'Regional Hospital System',
        outcome: '40% improvement in patient satisfaction and 30% reduction in administrative costs'
      },
      {
        title: 'Healthcare Network',
        outcome: 'Streamlined care coordination across 50+ locations with real-time data access'
      }
    ]
  },
  'financial-services': {
    name: 'Financial Services',
    description: 'Wizdin Solutions empowers the Financial Services industry with Salesforce-driven digital transformation. From customer engagement to analytics, our tailored solutions address real-world challenges and enhance operational efficiency.',
    challenges: [
      'Client onboarding and KYC processes',
      'Wealth management and advisory services',
      'Regulatory compliance and reporting',
      'Cross-selling and upselling opportunities',
      'Digital transformation and innovation'
    ],
    solutions: [
      'Financial Services Cloud implementation',
      'Client lifecycle management',
      'Wealth management automation',
      'Compliance and risk management',
      'Digital banking solutions'
    ],
    benefits: [
      'Enhanced client engagement',
      'Improved advisor productivity',
      'Better compliance management',
      'Increased cross-selling success',
      'Faster digital transformation'
    ],
    caseStudies: [
      {
        title: 'Wealth Management Firm',
        outcome: '35% increase in advisor productivity and 25% growth in assets under management'
      },
      {
        title: 'Insurance Company',
        outcome: 'Streamlined claims processing with 50% faster resolution times'
      }
    ]
  }
  // Add other industries similarly...
};

export default function IndustryPage({ params }) {
  const { industry } = params;
  const industryInfo = industriesData[industry];

  if (!industryInfo) {
    notFound();
  }

  return (
    <div className="pt-5 bg-white">
  {/* Hero Section */}
  <section className="bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">{industryInfo.name}</h1>
        <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
          {industryInfo.description}
        </p>
      </div>
    </div>
  </section>

  {/* Industry Challenges */}
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Industry Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryInfo.challenges.map((challenge, index) => (
            <div key={index} className="bg-linear-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{challenge}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Salesforce Solutions */}
  <section className="section-padding bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Salesforce Solutions</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryInfo.solutions.map((solution, index) => (
            <li key={index} className="flex items-start space-x-6 group hover:translate-x-2 transition-transform duration-300">
              <div className="w-10 h-10 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 text-xl leading-relaxed group-hover:text-amber-600 transition-colors duration-300">{solution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  {/* Benefits */}
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Key Benefits Delivered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryInfo.benefits.map((benefit, index) => (
            <div key={index} className="bg-linear-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  {/* Case Studies */}
  <section className="section-padding bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Case Studies</h2>
        <div className="space-y-8">
          {industryInfo.caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 md:mb-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">{study.title}</h3>
                  <p className="text-gray-700 text-xl leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Results Summary */}
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Typical Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">40%</div>
            <p className="text-gray-700 font-semibold">Cost Reduction</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">60%</div>
            <p className="text-gray-700 font-semibold">Efficiency Gain</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">35%</div>
            <p className="text-gray-700 font-semibold">Revenue Growth</p>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">50%</div>
            <p className="text-gray-700 font-semibold">Faster Deployment</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="section-padding bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">See How We Can Help Your {industryInfo.name} Business</h2>
      <p className="text-2xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed">
        Let's discuss how Salesforce can transform your {industryInfo.name.toLowerCase()} operations.
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
  const industries = Object.keys(industriesData);
  
  return industries.map((industry) => ({
    industry: industry,
  }));
}