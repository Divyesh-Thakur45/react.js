import React from "react";

export default function About() {
  return (
    <div className="bg-white text-gray-800">
    <section className=" py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl">
          Discover our journey, our mission, and the team that makes it all possible.
        </p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg mb-4">
          At Your E-commerce Store, we believe in providing our customers with the best shopping experience. Founded in 2020, we have grown from a small online store to a leading retailer, thanks to our commitment to quality and customer satisfaction.
        </p>
        <p className="text-lg">
          Our mission is simple: to bring you the best products at the best prices, with exceptional customer service. We are passionate about what we do, and we strive to make every shopping experience with us a positive one.
        </p>
      </div>
    </section>
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Customer First</h3>
            <p className="text-lg">
              We are committed to providing exceptional customer service and ensuring that our customers are always satisfied.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Quality Products</h3>
            <p className="text-lg">
              We source only the best products, ensuring that everything we sell meets our high standards of quality.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
            <p className="text-lg">
              We are always looking for new ways to improve our offerings and provide our customers with the latest products.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
