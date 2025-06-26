'use client';
import { useEffect, useState } from "react";

export default function Tracker() {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
        { id: 3, name: "Task 3" }
    ]);
    const [newTask, setNewTask] = useState("");

    const createTask =( )=>{
        
    const task = {
            id: tasks.length + 1,
            name: newTask
        };
        setTasks([...tasks, task]);
        setNewTask("");
    };
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900 p-4">
      <h3 className="text-3xl font-semibold mb-2">Task Tracker</h3>
      <div className="text-lg text-gray-600 mb-6">Track your tasks efficiently!</div>

      
      <div className="w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value ={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={createTask}>
            Add Task
          </button>
         
        </div>
      </div>

    
<ul className="list-disc list-inside space-y-2 text-left">
  {tasks.map((task) => (
    <li key={task.id}>{task.name}</li>
  ))}
</ul>

    </div>
  );
}
