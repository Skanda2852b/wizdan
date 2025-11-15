import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: "Strategic Advisory",
    slug: "strategic-advisory",
    description: "Expert guidance to align Salesforce with your business goals and maximize ROI through strategic planning and best practices."
  },
  {
    title: "Implementation",
    slug: "implementation",
    description: "End-to-end Salesforce implementation services tailored to your specific business requirements and processes."
  },
  {
    title: "Architectural Support",
    slug: "architectural-support",
    description: "Robust architectural design and support to ensure scalable, secure, and high-performing Salesforce solutions."
  },
  {
    title: "Optimization",
    slug: "optimization",
    description: "Continuous improvement of your Salesforce instance to enhance performance, usability, and business value."
  },
  {
    title: "Integrations",
    slug: "integrations",
    description: "Seamless integration of Salesforce with your existing systems and third-party applications for unified operations."
  },
  {
    title: "Data Migration",
    slug: "data-migration",
    description: "Secure and efficient migration of your data to Salesforce with minimal downtime and data integrity maintained."
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-support",
    description: "Ongoing maintenance and support services to keep your Salesforce instance running smoothly and efficiently."
  },
  {
    title: "Admin Support",
    slug: "admin-support",
    description: "Dedicated Salesforce administrator support to manage day-to-day operations and user management."
  },
  {
    title: "User Training",
    slug: "user-training",
    description: "Comprehensive training programs to ensure your team can leverage Salesforce to its full potential."
  }
];

export default function Services() {
  return (
    <div className=" bg-white">
  {/* Hero Section */}
  <section className="bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Services</h1>
        <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
          Comprehensive Salesforce consulting services to drive your business forward
        </p>
      </div>
    </div>
  </section>

  {/* Services Grid */}
  <section className="py-20 md:py-28 bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Salesforce Solutions</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          End-to-end Salesforce services tailored to your business needs and objectives
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      
      {/* Service Highlights */}
      <div className="mt-20 pt-16 border-t border-amber-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Certified Experts</h3>
            <p className="text-gray-700">12+ Salesforce certifications across all major clouds</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Proven Results</h3>
            <p className="text-gray-700">50+ successful implementations with measurable ROI</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Secure & Reliable</h3>
            <p className="text-gray-700">Enterprise-grade security and 99.9% uptime guarantee</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-20 md:py-28 bg-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Ready to Get Started?</h2>
      <p className="text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
        Let's discuss how our Salesforce services can transform your business operations and drive growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="/contact" className="bg-black text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 inline-block">
          Request Consultation
        </a>
        <a href="/about" className="bg-transparent text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-500 hover:text-black transition-all duration-300 border-2 border-black hover:border-amber-500">
          Learn About Us
        </a>
      </div>
      
      {/* Trust Indicators */}
      <div className="mt-16 pt-12 border-t border-amber-200">
        <p className="text-gray-600 text-lg mb-8 font-semibold">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="text-amber-600 font-bold text-lg">Fortune 500</div>
          <div className="text-amber-600 font-bold text-lg">Tech Giants</div>
          <div className="text-amber-600 font-bold text-lg">Startups</div>
          <div className="text-amber-600 font-bold text-lg">Enterprises</div>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}