export default function About() {
  return (
    <div className=" bg-white">
  {/* Hero Section */}
  <section className="pt-6 pb-6 bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About <span className="text-amber-400">Wizdin Solutions</span></h1>
        <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
          Empowering businesses with Salesforce technology that drives measurable outcomes.
        </p>
      </div>
    </div>
  </section>

  {/* Our Story */}
  <section className="pt-6 pb-6 section-padding bg-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">Our Story</h2>
        <div className="prose prose-lg text-gray-700 mx-auto">
          <p className="text-2xl leading-relaxed mb-8 font-light">
            Wizdin Solutions was founded with one mission – to empower businesses with Salesforce technology that drives measurable outcomes. Our team has over <span className="text-amber-600 font-semibold">16 years of experience</span> across industries, holding <span className="text-amber-600 font-semibold">12 Salesforce certifications</span>.
          </p>
          <p className="text-2xl leading-relaxed mb-8 font-light">
            We combine strategic thinking, technical expertise, and a human-centered approach to deliver transformation at scale. Our founders, including Jeet Singh, have a proven track record of delivering enterprise-level Salesforce solutions that drive growth and innovation.
          </p>
          <p className="text-2xl leading-relaxed font-light">
            From small businesses to Fortune 500 companies, we've helped organizations across various sectors leverage Salesforce to streamline operations, enhance customer relationships, and accelerate growth.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Mission, Vision, Values */}
  <section className="pt-6 pb-9 section-padding bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-amber-500/25">
            <span className="text-white text-3xl">🎯</span>
          </div>
          <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
          <p className="text-gray-700 text-xl leading-relaxed">
            To empower businesses with Salesforce technology that drives measurable outcomes and sustainable growth.
          </p>
        </div>
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-amber-500/25">
            <span className="text-white text-3xl">👁️</span>
          </div>
          <h3 className="text-3xl font-bold text-black mb-6">Our Vision</h3>
          <p className="text-gray-700 text-xl leading-relaxed">
            To be the leading Salesforce consulting partner known for delivering exceptional value and innovation.
          </p>
        </div>
        <div className="text-center group hover:scale-105 transition-transform duration-300">
          <div className="w-24 h-24 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-amber-500/25">
            <span className="text-white text-3xl">💎</span>
          </div>
          <h3 className="text-3xl font-bold text-black mb-6">Our Values</h3>
          <p className="text-gray-700 text-xl leading-relaxed">
            Excellence, Innovation, Collaboration, and Client Success are at the core of everything we do.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Leadership */}
  <section className="pt-6 pb-8 section-padding bg-white">
    <div className="container-custom">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">Our Leadership</h2>
      <div className="max-w-5xl mx-auto">
        <div className="bg-linear-to-br from-amber-50 to-white rounded-3xl p-8 md:p-12 border border-amber-100 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-40 h-40 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              JS
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-black mb-3">Jeet Singh</h3>
              <p className="text-amber-600 text-xl font-semibold mb-6">Founder & CEO</p>
              <p className="text-gray-700 text-xl leading-relaxed">
                With over 16 years of experience in Salesforce consulting, Jeet has led numerous enterprise implementations and digital transformations. His expertise spans across multiple industries and Salesforce clouds, helping organizations achieve remarkable ROI and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Our Approach */}
  <section className="pt-6 pb-6 section-padding bg-linear-to-br from-amber-50 to-white">
    <div className="container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Salesforce-Driven Transformation</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We follow a comprehensive approach that begins with understanding your business objectives and ends with measurable outcomes. Our methodology ensures that Salesforce becomes a strategic asset for your organization.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Continuous Innovation</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We stay at the forefront of Salesforce innovations, continuously updating our skills and methodologies to deliver cutting-edge solutions that keep you ahead of the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Credentials & Certifications */}
  <section className="pt-6 pb-6 section-padding bg-white">
    <div className="container-custom">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">Credentials & Certifications</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Sales Cloud Consultant',
            'Service Cloud Consultant',
            'Platform Developer II',
            'Application Architect',
            'System Architect',
            'Marketing Cloud Consultant',
            'CPQ Specialist',
            'Field Service Lightning Consultant'
          ].map((cert, index) => (
            <div key={index} className="bg-linear-to-br from-amber-50 to-white rounded-2xl p-6 text-center border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <p className="text-gray-700 font-semibold text-lg">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="pt-6 pb-6 section-padding bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
    <div className="container-custom text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Work with Us</h2>
      <p className="text-2xl mb-12 max-w-2xl mx-auto text-amber-100 leading-relaxed">
        Ready to transform your business with Salesforce? Let's discuss your project and how we can help.
      </p>
      <a href="/contact" className="bg-amber-500 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 inline-block">
        Get in Touch
      </a>
    </div>
  </section>
</div>
  );
}