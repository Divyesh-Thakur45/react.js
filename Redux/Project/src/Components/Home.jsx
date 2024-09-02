import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold text-center text-gray-800 mb-8">
        Home Page
      </h1>
      <hr className="mb-8 border-gray-300" />
      {/* Hero Section */}
      <section id="home" className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to MyWebsite
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We offer amazing services to help you grow your business.
          </p>
          <a
            href="Product"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Service One
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vehicula ex nisi.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Service Two
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vehicula ex nisi.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Service Three
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vehicula ex nisi.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
  );
};

export default Home;
