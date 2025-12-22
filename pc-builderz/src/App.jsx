import React  from 'react';
import partsData from './data/parts.json';
import FeaturedScreen from './components/featuredScreen.jsx';
import LiveCompatibility from './components/liveCompatibility.jsx';
import BuildScreen from './components/BuildScreen.jsx';

function App() {
  const [selectedCPU, setSelectedCPU] = React.useState(null);
  const [selectedMOBO, setSelectedMOBO] = React.useState(null);
  const [selectedGPU, setSelectedGPU] = React.useState(null);
  const [selectedRAM, setSelectedRAM] = React.useState(null);

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#F8FAFC] font-sans">
      {/* Navbar Component */}
      <nav className="flex justify-between items-center p-6 border-b border-[#1E293B]">
        <h1 className="text-2xl font-bold tracking-tighter text-[#38BDF8]">
          PC BUILDERZ
        </h1>
        <div className="space-x-9 hidden md:flex font-mono text-sm tracking-wide">
          <a href="#" className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Shop</a>
          <a href="/build" className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Build Screen</a>
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
      {/* Featured Builds Section */} 

     <FeaturedScreen />

     {/* Live Compatibility Screen */}

     <LiveCompatibility /> 
    </div>
  )
}

export default App;