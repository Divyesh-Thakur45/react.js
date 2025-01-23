import React from 'react'

const Signin = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login Page
                    </h1>
                    <form className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Login"
                                className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin