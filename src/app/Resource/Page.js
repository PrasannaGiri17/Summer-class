'use client';
import { useEffect, useState } from "react";

export default function Effecting() {
  const [users, setUsers] = useState([]);
  const [resourceType, setResourceType] = useState("users");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching data:", error));

    return () => {
      console.log("successfully fetched data for", resourceType);
    };
  }, [resourceType]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
    
      <h3 className="text-2xl mb-4">List siuu</h3>
      <h2 className="text-xl mb-4">Resource Type: {resourceType}</h2>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition mb-2"
        onClick={() => setResourceType("users")}
      >
        User List
      </button>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition mb-2"
        onClick={() => setResourceType("posts")}
      >
        Post List
      </button>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition mb-4"
        onClick={() => setResourceType("comments")}
      >
        Comment List
      </button>

      <ul className="list-disc pl-6">
        {users.map(user => (
          <li key={user.id} className="mb-2">
            {user.id}. <strong>{user.name || user.title}</strong> - {user.email || user.body}
          </li>
        ))}
      </ul>

        {/* {JSON.stringify(users)} */}
    </div>
  );
}
