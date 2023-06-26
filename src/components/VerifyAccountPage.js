import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const VerifyAccountPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const patchAuth = async () => {
      const header = {
        Authorization: `Bearer ${token}`,
      };

      await axios.patch(
        'https://minpro-blog.purwadhikabootcamp.com/api/auth/verify',
        {},
        { headers: header }
      );
    };
    patchAuth();

    localStorage.setItem('token', token);

    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-md p-8 bg-gray-800 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Verify Account</h2>
        <p className="text-gray-300 mb-4">Your account has been successfully verified!</p>
        <p className="text-gray-300">Redirecting to the landing page...</p>
      </div>
    </div>
  );
};

export default VerifyAccountPage;
