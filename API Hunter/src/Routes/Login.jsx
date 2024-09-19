import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {loginUser} = useContext(AuthContext)
  const HandleSubmit = (e) => {
    e.preventDefault()
    let userData = {
      email, password
    }
    PostData(userData)
  }
  const PostData = async (userData) => {
    try {
      let response = await axios.post("https://reqres.in/api/login", userData);
      alert('You are Login successfully')
      loginUser(response.data.token)
      navigate('/dashboard')
    } catch (error) {
      alert('Login and Password are not correct.')
      console.log(error)
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form data-testid="login-form" className="space-y-6" onSubmit={(e)=>HandleSubmit(e)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
              <input
                data-testid="email-input"
                type="email"
                placeholder="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
              <input
                data-testid="password-input"
                type="password"
                placeholder="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <input
              data-testid="form-submit"
              type="submit"
              value="SUBMIT"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 cursor-pointer"
            />
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
