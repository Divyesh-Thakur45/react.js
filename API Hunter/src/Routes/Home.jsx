import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 min-h-screen">
      <Link to="/login" className="hover:underline">
        <h3
          data-testid="login-link"
          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
        >
          Login Page
        </h3>
      </Link>
      <Link to="/dashboard" className="hover:underline">
        <h3
          data-testid="home-link"
          className="text-lg font-semibold text-blue-600 hover:text-blue-800"
        >
          Home
        </h3>
      </Link>
    </div>
  );
}