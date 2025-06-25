'use client'
import { useState } from 'react';

export default function Ofrom() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <h1 className="text-2xl mb-4">Welcome to the Form Page!</h1>
      <form className="w-full max-w-sm">
      <input
        type="text"
        placeholder="Enter your name"
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
        onChange={(e) => setName(e.target.value)}
        />
        {name && <h2>Name: {name}</h2>}
      <input
        type="email"
        placeholder="Enter your email"
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray
        -700 leading-tight focus:outline-none focus:shadow-outline mb-4'
        onChange={(e) => setEmail(e.target.value)}
      />
      </form>
        
       
      {email && <h2>Email: {email}</h2>}
     
    </div>

  );
}
