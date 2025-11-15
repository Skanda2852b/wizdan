import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Strategic Advisory',
    'Implementation',
    'Architectural Support',
    'Optimization',
    'Integrations',
    'Data Migration',
  ];

  return (
    <footer className="pt-10 pr-2 pl-2 bg-black text-white">
  <div className="container-custom section-padding">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Company Info */}
      <div className="lg:col-span-2">
        <Link href="/" className="flex items-center space-x-3 mb-8 group">
          <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <span className="text-black font-bold text-xl">W</span>
          </div>
          <span className="text-2xl font-bold text-white">Wizdin Solutions</span>
        </Link>
        <p className="text-gray-300 mb-8 leading-relaxed max-w-md text-lg">
          Transforming businesses with Salesforce excellence. We help organizations design, implement, and optimize Salesforce solutions that drive growth and innovation.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com"
            className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
          >
            <span className="text-black font-bold text-lg">in</span>
          </a>
          <a
            href="https://twitter.com"
            className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
          >
            <span className="text-black font-bold text-lg">X</span>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-bold mb-8 text-amber-400">Quick Links</h3>
        <ul className="space-y-4">
          {quickLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center group"
              >
                <svg className="w-4 h-4 mr-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-xl font-bold mb-8 text-amber-400">Services</h3>
        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service}>
              <span className="text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center group cursor-pointer">
                <svg className="w-4 h-4 mr-3 text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-16 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-base mb-4 md:mb-0">
        © {currentYear} Wizdin Solutions. All rights reserved.
      </p>
      <div className="flex space-x-8">
        <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-base transition-all duration-300 font-medium">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-base transition-all duration-300 font-medium">
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>
  );
}