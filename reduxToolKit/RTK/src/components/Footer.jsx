import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <p className="mb-4">&copy; 2024 MyWebsite. All rights reserved.</p>
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <a href="#home" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer