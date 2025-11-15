'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Logout() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('session');

    // Countdown redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-25 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-3xl font-black text-gray-900 mb-4">
          Logged Out Successfully
        </h2>
        
        <p className="text-gray-600 mb-2">
          You have been successfully logged out of your account.
        </p>
        
        <p className="text-gray-500 text-sm mb-8">
          Redirecting to home page in <span className="font-bold text-amber-600">{countdown}</span> seconds...
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold py-4 px-6 rounded-2xl hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105 border-2 border-transparent"
          >
            Go Home Now
          </Link>
          
          <Link
            href="/auth/login"
            className="block w-full bg-gradient-to-r from-gray-800 to-black text-white font-bold py-4 px-6 rounded-2xl hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105 border-2 border-transparent"
          >
            Sign In Again
          </Link>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-amber-100">
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/blog" className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300">
              Browse Blog
            </Link>
            <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-300">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}