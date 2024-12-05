import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../context'; 

const LoginPage = () => {
  const { setUserInfo } = useStateValue(); 
  const navigate = useNavigate();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password || !firstname || !lastname || !age || !gender || !profession) {
      setError('All fields are required!');
      return;
    }

  
    setUserInfo(...{ email, password, firstname, lastname, age, gender, profession });

    setError('');
    navigate('/');
  };

  return (
    <div className="w-96 p-6 border mx-auto mt-7 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
      <div className="mt-4 text-sm text-center">
        <p>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 underline"
          >
            Go Back
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
