import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../../context'; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [profession, setProfession] = useState('');
  const [error, setError] = useState('');

  const { setUserInfo } = useStateValue(); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password || !firstname || !lastname || !age || !gender || !profession) {
      setError('All fields are required!');
      return;
    }

    setError('');
    const userInfo = { email, password, firstname, lastname, age, gender, profession };


    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    setUserInfo(userInfo);

    console.log('User Info:', userInfo);

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

        <div>
          <label htmlFor="firstname" className="block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter your first name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="lastname" className="block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter your last name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium">
            Gender
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="profession" className="block text-sm font-medium">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="Enter your profession"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <button
        onClick={() => navigate(-1)}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
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
