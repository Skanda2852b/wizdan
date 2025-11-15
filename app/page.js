import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CloudCard from '@/components/CloudCard';
import IndustryCard from '@/components/IndustryCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';

// Sample data - in production, this would come from MongoDB
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
  }
];

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
  }
];

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
  }
];

export default function Home() {
  return (
    <>
  <Hero />
  
  {/* About Section */}
  <section className="py-20 md:py-28 bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          About Wizdin Solutions
        </h2>
        <p className="text-2xl text-gray-700 mb-12 leading-relaxed font-light">
          Wizdin Solutions is a Salesforce consulting company founded by experts with over 16 years of experience delivering enterprise-level Salesforce solutions across industries. We combine strategic thinking, technical expertise, and a human-centered approach to deliver transformation at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/about" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
            Learn More About Us
          </a>
          <a href="/contact" className="bg-transparent text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 border-2 border-black hover:border-amber-500">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* Core Services */}
  <section className="py-20 md:py-28 bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Our Core Services
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Comprehensive Salesforce consulting services to drive your business forward
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
      <div className="text-center">
        <a href="/services" className="bg-transparent text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 border-2 border-black hover:border-amber-500 inline-block">
          View All Services
        </a>
      </div>
    </div>
  </section>

  {/* Salesforce Expertise */}
  <section className="py-20 md:py-28 bg-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Salesforce Expertise
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Deep expertise across the entire Salesforce ecosystem
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {clouds.slice(0, 4).map((cloud) => (
          <CloudCard key={cloud.slug} cloud={cloud} />
        ))}
      </div>
      <div className="text-center">
        <a href="/expertise" className="bg-transparent text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 border-2 border-black hover:border-amber-500 inline-block">
          Explore All Clouds
        </a>
      </div>
    </div>
  </section>

  {/* Industries */}
  <section className="py-20 md:py-28 bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Industries We Serve
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Tailored Salesforce solutions for your specific industry challenges
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {industries.slice(0, 4).map((industry) => (
          <IndustryCard key={industry.slug} industry={industry} />
        ))}
      </div>
      <div className="text-center">
        <a href="/industries" className="bg-transparent text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 border-2 border-black hover:border-amber-500 inline-block">
          View All Industries
        </a>
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-20 md:py-28 bg-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Why Choose Wizdin Solutions
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Proven expertise and measurable results for businesses of all sizes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-amber-500/25">
            <span className="text-white text-3xl">🏆</span>
          </div>
          <h3 className="text-2xl font-bold text-black mb-4">16+ Years Experience</h3>
          <p className="text-gray-700 text-lg leading-relaxed">Deep expertise in enterprise Salesforce implementations across multiple industries</p>
        </div>
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-amber-500/25">
            <span className="text-white text-3xl">📊</span>
          </div>
          <h3 className="text-2xl font-bold text-black mb-4">12+ Certifications</h3>
          <p className="text-gray-700 text-lg leading-relaxed">Our team holds multiple Salesforce certifications ensuring top-tier expertise</p>
        </div>
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-amber-500/25">
            <span className="text-white text-3xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-black mb-4">Proven Results</h3>
          <p className="text-gray-700 text-lg leading-relaxed">Consistent delivery of measurable business outcomes and ROI for our clients</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-amber-200">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">50+</div>
          <p className="text-gray-700 font-semibold text-lg">Projects Delivered</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">98%</div>
          <p className="text-gray-700 font-semibold text-lg">Client Satisfaction</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">12+</div>
          <p className="text-gray-700 font-semibold text-lg">Industries Served</p>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">24/7</div>
          <p className="text-gray-700 font-semibold text-lg">Support Available</p>
        </div>
      </div>
    </div>
  </section>

  <TestimonialCarousel />

  {/* Final CTA */}
  <section className="py-20 md:py-28 bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Ready to Transform Your Business?
      </h2>
      <p className="text-2xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed">
        Let's discuss how Wizdin Solutions can help you achieve Salesforce excellence and drive meaningful business growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="/contact" className="bg-amber-500 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25">
          Book a Free Consultation
        </a>
        <a href="/about" className="bg-transparent text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 border-2 border-white hover:border-amber-400">
          Learn More
        </a>
      </div>
    </div>
  </section>
</>
  );
}