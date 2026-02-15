import { useState, useEffect } from "react";

function App() {
  return (
    <div className="bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-transparent">
        <div className="text-2xl font-bold tracking-wide">
          <span>DP</span>
          <span className="text-red-500">CaliX</span>
        </div>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-red-500 cursor-pointer transition">
            Products
          </li>
          <li className="hover:text-red-500 cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-red-500 cursor-pointer transition">
            For Business
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Softer Overlay */}
        <div className="absolute "></div>

        {/* Content */}


      </section>


      {/* Second Section */}
      <section
        id="next"
        className="h-screen bg-gray-900 flex items-center justify-center"
      >
        <h2 className="text-4xl font-semibold">
          Welcome to DP CaliX Training 💪😂
        </h2>
      </section>
      <div className="relative z-10 max-w-3xl px-6 py-60 text-center ml-90  ">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Unlock Your Potential with DP CaliX
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Elevate your skills with our comprehensive training programs.
        </p>
        <button className="px-8 py-4 bg-red-500 text-white rounded-full text-lg font-semibold hover:bg-red-600 transition">
          Get Started
        </button>
      </div>

    </div>

  );
}

export default App;
