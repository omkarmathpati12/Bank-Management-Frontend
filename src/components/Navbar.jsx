import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="w-full flex justify-between items-center px-6 py-4">

        <h1 className="text-3xl font-bold text-blue-700">
          Smart<span className="text-green-500">Bank</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:text-blue-600">
              Services
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:text-blue-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        <div className="space-x-3">
          <button className="border border-blue-600 px-5 py-2 rounded-lg text-blue-600 hover:bg-blue-50">
            Login
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </div>

      </div>
    </nav>
  );
}