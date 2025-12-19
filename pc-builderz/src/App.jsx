import React  from 'react';
import partsData from './data/parts.json';

function App() {
  const [selectedCPU, setSelectedCPU] = React.useState(null);

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#F8FAFC] font-sans">
      {/* Navbar Component */}
      <nav className="flex justify-between items-center p-6 border-b border-[#1E293B]">
        <h1 className="text-2xl font-bold tracking-tighter text-[#38BDF8]">
          PC BUILDERZ
        </h1>
        <div className="space-x-9 hidden md:flex font-mono text-sm tracking-wide">
          <a href="#" className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Shop</a>
          <a href="#" className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Build Screen</a>
          <a href="#" className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Cart</a>
        </div>
        <button className="bg-[#38BDF8] text-[#0F172A] px-5 py-2 rounded-full font-bold hover:bg-[#A855F7] hover:text-[#F8FAFC] transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Build Your Dream <span className="text-[#38BDF8]">PC</span>
        </h2>
        <p className="text-[#F8FAFC] text-lg max-w-2xl mx-auto mb-10 opacity-80">
          Precision engineering meets simple selection. Use our real-time compatibility
          checker to build the perfect PC tailored to your needs. 
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#38BDF8] text-[#0F172A] px-8 py-4 rounded-lg font-bold hover:bg-[#A855F7] hover:text-[#F8FAFC] transition">
            Start Building
          </button>
          <button className="border border-[#38BDF8] px-8 py-4 rounded-lg font-bold text-[#F8FAFC] hover:bg-[#1E293B] transition">
            View Ideas
          </button>
        </div>
      </header>

      {/* CPU Selection Section */}
      <main className="max-w-6xl mx-auto p-6">
        <h3 className="text-2xl font-bold mb-6 text-[#F8FAFC]">Select a CPU.</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partsData.CPU.map((cpu) => (
            <div key={cpu.id} className="p-6 bg-[#1E293B] rounded-xl border border-[#38BDF8] border-opacity-30">
              <h4 className=" font-sans text-xl font-bold mb-2 text-[#F8FAFC]">{cpu.name}</h4>
              <p className="font-mono text-[#F8FAFC] opacity-70 mb-4">{cpu.description}</p>
              <p className=" font-mono font-bold text-lg text-[#38BDF8]">${cpu.price}</p>
              <button
                className="border border-[#38BDF8] bg-transparent text-[#F8FAFC] px-4 py-2 rounded-lg mt-4 hover:bg-[#38BDF8] hover:text-[#0F172A] transition font-semibold"
                onClick={() => setSelectedCPU(cpu)}
              >
                Select
              </button>
            </div>
          ))}
          </div> 
      </main>
      
    </div>
  )
}

export default App;