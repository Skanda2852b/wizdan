'use client';
import { useEffect, useState } from 'react';

export default function DebugUser() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const session = localStorage.getItem('session');
    
    // Safely parse user data
    let parsedUser = null;
    let parsedSession = null;
    
    try {
      parsedUser = user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing user:', error);
    }
    
    try {
      // Check if session is the string "undefined" or actual JSON
      if (session && session !== 'undefined') {
        parsedSession = JSON.parse(session);
      }
    } catch (error) {
      console.error('Error parsing session:', error);
    }
    
    setUserData({
      user: parsedUser,
      session: parsedSession,
      rawUser: user,
      rawSession: session,
    });
  }, []);

  const clearData = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('session');
    window.location.reload();
  };

  const createTestUser = () => {
    const testUser = {
      _id: 'test-user-id-123',
      name: 'Test User',
      email: 'test@example.com',
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('user', JSON.stringify(testUser));
    localStorage.setItem('session', JSON.stringify({
      userId: testUser._id,
      email: testUser.email,
      name: testUser.name,
      role: testUser.role,
    }));
    
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">User Data Debug</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Parsed User Data:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
              {JSON.stringify(userData?.user, null, 2) || 'No user data found'}
            </pre>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Raw User Data from localStorage:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
              {userData?.rawUser || 'No user data found'}
            </pre>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Parsed Session Data:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
              {JSON.stringify(userData?.session, null, 2) || 'No session data found'}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Raw Session Data from localStorage:</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
              {userData?.rawSession || 'No session data found'}
            </pre>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Actions:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={clearData}
                className="bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors font-bold"
              >
                Clear All User Data
              </button>
              <button
                onClick={createTestUser}
                className="bg-amber-500 text-white px-4 py-3 rounded-lg hover:bg-amber-600 transition-colors font-bold"
              >
                Create Test User
              </button>
              <button
                onClick={() => window.location.href = '/auth/login'}
                className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors font-bold"
              >
                Go to Login
              </button>
              <button
                onClick={() => window.location.href = '/auth/register'}
                className="bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors font-bold"
              >
                Go to Register
              </button>
              <button
                onClick={() => window.location.href = '/blog/create'}
                className="bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition-colors font-bold"
              >
                Test Blog Creation
              </button>
              <button
                onClick={() => window.location.href = '/blog'}
                className="bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors font-bold"
              >
                Go to Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}