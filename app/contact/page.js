import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
        <div className="container-custom py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact Us</h1>
            <p className="text-2xl md:text-3xl text-amber-100 leading-relaxed">
              Have a question or want to discuss a project? Our team is just one message away.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-linear-to-br from-amber-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ContactForm />
            

            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">Get in Touch</h3>
                <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                  Fill out the form and we'll get back within 24 hours. Or reach out directly using the contact information below.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Phone</h4>
                    <p className="text-gray-700 text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Email</h4>
                    <p className="text-gray-700 text-lg">hello@wizdin.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">Office</h4>
                    <p className="text-gray-700 text-lg">
                      123 Salesforce Street<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">LinkedIn</h4>
                    <a href="https://linkedin.com" className="text-amber-600 hover:text-amber-700 text-lg font-semibold hover:underline transition-colors duration-300">linkedin.com/company/wizdin</a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl shadow-xl p-8 mt-8 border border-amber-100">
                <h4 className="text-2xl font-bold text-black mb-6">Business Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-black font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-black font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-black font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8 border border-amber-100">
                <h4 className="text-2xl font-bold text-black mb-6">Our Location</h4>
                <div className="w-full h-80 bg-linear-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center border-2 border-amber-200 border-dashed">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-amber-700 font-semibold text-lg">Interactive Map</p>
                    <p className="text-amber-600 mt-2">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-20 md:py-28 bg-linear-to-br from-black via-gray-900 to-amber-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Schedule a Consultation</h2>
          <p className="text-2xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to discuss your Salesforce project? Book a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="bg-amber-500 text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 inline-block">
              Schedule Now
            </a>
            <a href="/services" className="bg-transparent text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 border-2 border-white hover:border-amber-400">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}