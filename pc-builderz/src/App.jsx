import React from 'react';
import partsData from './data/parts.json';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#F8FAFC] font-sans">
      {/* Navbar Component */}
      <nav className="flex justify-between items-center p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-tighter text-[#38bdf8]">
          PC BUILDERZ
        </h1>
        <div className="space-x-9 hidden md:flex">
          <a href="#" className="hover:text-[#38BDF8] transition">Shop</a>
          <a href="#" className="hover:text-[#38BDF8] transition">Build Screen</a>
          <a href="#" className="hover:text-[#38BDF8] transition">Cart</a>
        </div>
        <button className="bg-[#38BDF8] text-[#0F172A] px-5 py-2 rounded-full font-bold hover:bg-white transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Build Your Dream <span className="text-[#38BDF8]">PC</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Precision engineering meets simple selection. Use our real-time compatibility
          checker to build the perfect PC tailored to your needs. 
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-slate-200">
            Start Building
          </button>
          <button className="border border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-800">
            View Ideas
          </button>
        </div>
      </header>

      {/* PLACEHOLDER FOR NEXT STEPS */}
      <main className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-6">Select a CPU.</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partsData.CPU.map((cpu) => (
            <div key={cpu.id} className="p-6 bg-[#1E293B] rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-2">{cpu.name}</h4>
              <p className="text-slate-400 mb-4">{cpu.description}</p>
              <p className="font-bold text-lg">${cpu.price}</p>
            </div>
          ))}
          </div> 
      </main>
      
    </div>
  )
}

export default App;