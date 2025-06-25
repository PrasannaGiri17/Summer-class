import Page from "@/app/State/Page";
import Form from "@/app/State/Form";
export default function Navbar() {
return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li>
            <a href="/form" className="text-gray-300 hover:text-white">Form</a>
          </li>
          <li>
            <a href="/state" className="text-gray-300 hover:text-white">State</a>
          </li>
        </ul>
      </div>
    </nav>

    
  );
}
