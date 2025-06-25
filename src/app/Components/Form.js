'use client'
import { useState } from 'react';

export default function From() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Submitted Name:", name);
    console.log("Submitted Email:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <h1 className="text-2xl mb-4">Welcome to the Form Page!</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-xl mb-2">Form Data:</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
}
