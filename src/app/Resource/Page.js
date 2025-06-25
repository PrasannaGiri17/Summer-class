'use client';
import { useEffect,useState } from "react";


export default function Effecting() {
    const [users, setUsers] = useState(0);
    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching data:", error));
        
        return () => {
            console.log("Component unmounted");
        };
    }, []); 
 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
        {/* {JSON.stringify(users)} */}
        <h1 className="text-2xl mb-4">User List</h1>
        <ul className="list-disc pl-6">
            {users.map(user => (
                <li key={user.id} className="mb-2">
                    {user.id}.<strong>{user.name}</strong> - {user.email}
                </li>
            ))} 
        </ul>
    </div>

  );
}
