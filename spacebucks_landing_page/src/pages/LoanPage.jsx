import React , { useState } from "react";
import Logo from "../assets/spacebucks submark.png"


// Placeholder menu icon (hamburger icon)
function MenuIcon() {

  
  return (
    <svg
      className="h-6 w-6 text-gray-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export default function LoanPage() {

 
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 100;
    const y = (e.clientY / innerHeight) * 100;
    setPosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200" onMouseMove={handleMouseMove} style={{
      background: `radial-gradient(
        at ${position.x}% ${position.y}%,
rgb(6, 24, 73),
rgb(3, 1, 24)
      )`,
    }}>
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo 1" className="h-15 " />
          <span className="font-bold text-xl">SpaceBucks</span>
        </div>
        <button className="p-2">
          <MenuIcon />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        {/* Title Section */}
        <h1 className="text-xl md:text-2xl font-semibold mb-2 text-center">
          Get a Business Loan From USD50 to
        </h1>
        <div className="text-3xl md:text-5xl font-bold text-purple-500 mb-2 text-center">
          All the <span className="text-yellow-500">SpaceBucks</span> you need
        </div>
        <p className="text-lg md:text-xl text-center mb-8">
          with <span className="font-semibold">Our Support</span>
        </p>

        {/* Features List */}
        <ul className="space-y-4 mb-8 max-w-sm w-full">
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">💲</span>
            <span>Fully registered microfinance institution</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">💲</span>
            <span>Simple paperwork</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">💲</span>
            <span>Apply via mobile</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">💲</span>
            <span>Receive mobile money or cash</span>
          </li>
        </ul>

        {/* CTA Button */}
        <h1 className="text-xl md:text-2xl font-semibold mb-2 text-center">
          Apply for a Loan 
        </h1>
        
<div class="flex flex-col bg-[#193f80] w-64 p-2 rounded-3xl gap-1">
  <a
    class="bg-[#225bc3] hover:bg-[#2564da] hover:scale-[1.065] hover:translate-y-[-7px] hover:rounded-[23px] hover:rounded-bl-none hover:rounded-br-none px-6 py-2 rounded-2xl rounded-bl-lg rounded-br-lg transition-all text-center text-[#d8e5f9] hover:text-[#a8c1f0] font-medium cursor-pointer"
    >Individual loan
  </a>
  <a
    class="bg-[#5350c6] hover:bg-secondary-600 hover:scale-[1.065] hover:translate-y-[7px] hover:rounded-[23px] hover:rounded-tl-none hover:rounded-tr-none px-6 py-2 rounded-2xl rounded-tl-lg rounded-tr-lg transition-all text-center text-[#d8e5f9] hover:text-[#b3aaee] font-medium cursor-pointer"
  >
    SME loan
  </a>
</div>

      </main>
    </div>
  );
}
