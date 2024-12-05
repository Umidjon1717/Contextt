import React from 'react';
import { useStateValue } from '../../context';
import LoginForm from '../../components/login/LoginForm';  

const About = () => {
  const { userInfo } = useStateValue();
  console.log(`hello: `, userInfo);
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">About</h1>
        
        {userInfo ? (
          <div className="max-w-sm mx-auto p-6 bg-white shadow rounded">
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              {userInfo.firstname} {userInfo.lastname}
            </h2>
            <p className="text-gray-600">
              <strong>Age:</strong> {userInfo.age}
            </p>
            <p className="text-gray-600">
              <strong>Gender:</strong> {userInfo.gender}
            </p>
            <p className="text-gray-600">
              <strong>Profession:</strong> {userInfo.profession}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-12">
            <h2 className="text-lg text-gray-600">No user information available</h2>
            <p className="text-gray-500">
              Please update your profile with the necessary details.
            </p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default About;
