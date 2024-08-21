import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 relative bottom-0 w-full">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              Contact Us
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              Terms & Conditions
            </a>
          </div>
          <div className="mb-4">
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-gray-400 mx-4">
              Twitter
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; 2024 My E-commerce Website. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
