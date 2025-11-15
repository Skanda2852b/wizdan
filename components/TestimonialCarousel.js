'use client';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content: "Wizdin Solutions transformed our Salesforce implementation. Their expertise helped us increase sales productivity by 40%.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Global Finance Partners",
    role: "Operations Director",
    content: "The team's deep knowledge of Financial Services Cloud was impressive. They delivered beyond our expectations.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "HealthFirst Systems",
    role: "CIO",
    content: "Outstanding service and support. Wizdin helped us streamline our patient management system with Health Cloud.",
    avatar: "ER"
  }
];

export default function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-7 pb-7 bg-linear-to-br from-amber-50 to-white section-padding">
  <div className="container-custom">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
        What Our Clients Say
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Discover how we've helped businesses achieve their Salesforce goals
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative border border-amber-100">
        {/* Quote Icon */}
        <div className="absolute top-0 left-10 transform -translate-y-1/2">
          <div className="w-16 h-16 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white text-3xl font-bold">"</span>
          </div>
        </div>
        
        {/* Testimonial Content */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light italic">
            "{testimonials[currentTestimonial].content}"
          </p>
        </div>
        
        {/* Client Info & Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-linear-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center shadow-lg border border-amber-200">
              <span className="text-amber-700 font-bold text-xl">
                {testimonials[currentTestimonial].avatar}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-black text-lg">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-gray-700">
                {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
              </p>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-amber-500 scale-125' 
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <div className="w-20 h-20 bg-amber-400 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-amber-200">
        <div className="text-amber-800 font-semibold text-lg opacity-80">5-Star Rated</div>
        <div className="text-amber-800 font-semibold text-lg opacity-80">98% Client Satisfaction</div>
        <div className="text-amber-800 font-semibold text-lg opacity-80">50+ Projects Delivered</div>
      </div>
    </div>
  </div>
</section>
  );
}