'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-215 bg-white rounded-3xl shadow-2xl md:p-10 border border-amber-100">
  <h3 className="text-4xl font-bold text-black mb-10">Send us a Message</h3>
  
  {submitStatus === 'success' && (
    <div className="bg-linear-to-r from-amber-50 to-amber-25 border border-amber-200 rounded-2xl p-6 mb-8 shadow-lg">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mr-4 shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-amber-800 font-semibold text-lg">Thank you for your message! We'll get back to you within 24 hours.</p>
      </div>
    </div>
  )}
  
  {submitStatus === 'error' && (
    <div className="bg-linear-to-r from-red-50 to-red-25 border border-red-200 rounded-2xl p-6 mb-8 shadow-lg">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-linear-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mr-4 shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="text-red-800 font-semibold text-lg">There was an error sending your message. Please try again.</p>
      </div>
    </div>
  )}

  <form onSubmit={handleSubmit} className="space-y-10">
    <div>
      <label htmlFor="name" className="block text-lg font-bold text-black mb-4">
        Full Name *
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
        placeholder="Enter your full name"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <label htmlFor="email" className="block text-lg font-bold text-black mb-4">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-lg font-bold text-black mb-4">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md"
          placeholder="Enter your phone number"
        />
      </div>
    </div>

    <div>
      <label htmlFor="message" className="block text-lg font-bold text-black mb-4">
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 bg-white shadow-sm hover:shadow-md resize-none"
        placeholder="Tell us about your project or inquiry..."
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-linear-to-r from-black to-gray-900 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:from-amber-500 hover:to-amber-600 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-[1.02] group"
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white group-hover:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="group-hover:text-black">Sending...</span>
        </div>
      ) : (
        <span className="group-hover:text-black">Send Message</span>
      )}
    </button>
  </form>
</div>
  );
}