import React  from 'react';
import partsData from './data/parts.json';
import FeaturedScreen from './components/featuredScreen.jsx';
import LiveCompatibility from './components/liveCompatibility.jsx';
import BuildScreen from './components/BuildScreen.jsx';
import Footer from './components/Footer.jsx';
import ShopByCategory from './components/ShopByCategory.jsx';
import CheckoutScreen from './components/CheckoutScreen.jsx';

function App() {
  const [selectedCPU, setSelectedCPU] = React.useState(null);
  const [selectedMOBO, setSelectedMOBO] = React.useState(null);
  const [selectedGPU, setSelectedGPU] = React.useState(null);
  const [selectedRAM, setSelectedRAM] = React.useState(null);
  const [selectedCASE, setSelectedCASE] = React.useState(null);
  const [selectedPSU, setSelectedPSU] = React.useState(null);
  const [selectedStorage, setSelectedStorage] = React.useState(null);
  const [compatibleCPU, setCompatibleCPU] = React.useState([]);
  const [compatibleMOBO, setCompatibleMOBO] = React.useState([]);
  const [compatibleCategory, setCompatibleCategory] = React.useState('');
  const [selectedScreen, setSelectedScreen] = React.useState('Home');
  const [buildFilter, setBuildFilter] = React.useState(null);

  const handleSandboxPartSelection = (category, partName) => {

    // Look into the specific parts data based on category and find the part with the matching name
    const partObject = partsData[category].find(p => p.name === partName);

    // update the correct sandbox state 
    if (category === 'CPU'){
      if (selectedCPU?.name === partName) {
        setSelectedCPU(null);
      } else {
        setSelectedCPU(partObject);
      }
    }

    if (category === 'MOBO') {
      if (selectedMOBO?.name === partName) {
        setSelectedMOBO(null);
      } else {
        setSelectedMOBO(partObject);
      }
    }
    if (category === 'GPU') {
      if (selectedGPU?.name === partName) {
        setSelectedGPU(null);
      } else {
        setSelectedGPU(partObject);
      }
    }
    if (category === 'RAM') {
      if (selectedRAM?.name === partName) {
        setSelectedRAM(null);
      } else {
        setSelectedRAM(partObject);
      }
    }
    if (category === 'CASE') {
      if (selectedCASE?.name === partName) {
        setSelectedCASE(null);
      } else {
        setSelectedCASE(partObject);
      }
    }
    if (category === 'PSU') {
      if (selectedPSU?.name === partName) {
        setSelectedPSU(null);
      } else {
        setSelectedPSU(partObject);
      }
    }
  }

  //Logic to check compatibility 

  const compatibilityIssues = (() => {
    let issues =[];

    // CPU & MOBO compatibility
    if (selectedCPU && selectedMOBO && selectedCPU.socket !== selectedMOBO.socket) {
      issues.push(`Socket Mismatch: Selected CPU (${selectedCPU.name} uses (${selectedCPU.socket} but selected Motherboard (${selectedMOBO.name}) uses: (${selectedMOBO.socket})) ) does not match Motherboard (${selectedMOBO.name}) uses (${selectedMOBO.socket}).`);
    }

      // MOBO & RAM compatibility
    if (selectedMOBO && selectedRAM && selectedRAM.ramType !== selectedMOBO.ramType) {
      issues.push(`RAM Type Mismatch: (${selectedMOBO.name} requires (${selectedMOBO.ramType}, but you have selected ${selectedRAM.type} RAM).)`)
    }

    return issues;
      
  })();

  const isPartDisabled = (category, part) => {

    // If no parts are selected, nothing is disabled
    if (!selectedCPU && !selectedMOBO && !selectedRAM && !selectedGPU) {
      return false;
    }
    
    // Check compatibility based on category
    if (category === 'CPU' && selectedMOBO) {
      return part.socket !== selectedMOBO.socket;
    }
    if (category === 'MOBO') {
      if (selectedCPU && part.socket !== selectedCPU.socket) return true;
      if (selectedRAM && part.ramType !== selectedRAM.ramType) return true;
    }
    if (category === 'RAM' && selectedMOBO) {
      return part.ramType !== selectedMOBO.ramType;
    }
    if (category === 'PSU') {
      const cpuWatts = selectedCPU ? parseInt(selectedCPU.tdp) : 0;
      const gpuWatts = selectedGPU ? parseInt(selectedGPU.tdp) : 0;

      // 150 buffer to include fans and other components
      const systemDemand = cpuWatts + gpuWatts + 150;

      // if the PSU wattage is less than system demand, disable it
      return part.wattage < systemDemand;
    }

    return false;
  }

  // Helper variables for the UI
  const hasRequiredParts = selectedCPU && selectedMOBO;
  const isPerfectMatch = hasRequiredParts && compatibilityIssues.length === 0;

  const calculateTotal = () => {
    // We convert the object values into an array and sum the prices
    return Object.values(selectedParts)
        .reduce((sum, part) => sum + (part?.price || 0), 0)
        .toFixed(2);
};

  const resetBuild = () => {
    setSelectedCPU(null);
    setSelectedMOBO(null);
    setSelectedRAM(null);
    setSelectedGPU(null);
    setSelectedCASE(null);
    setSelectedPSU(null);
  }


   // Prevent needing to scroll back up on screen change
   React.useEffect(() => {
    window.scrollTo(0, 0);
   }, [selectedScreen]);

  const selectedParts = {
    CPU: selectedCPU,
    MOBO: selectedMOBO,
    GPU: selectedGPU,
    RAM: selectedRAM,
    CASE: selectedCASE,
    PSU: selectedPSU
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#F8FAFC] font-sans">
      {/* Navbar Component */}
      <nav className="flex justify-between items-center p-6 border-b border-[#1E293B]">
        <h1 className="text-2xl font-bold tracking-tighter text-[#38BDF8]">
          PC BUILDERZ
        </h1>
        <div className="space-x-9 hidden md:flex font-mono text-sm tracking-wide cursor-pointer">
          <a onClick={() => { setSelectedScreen('Home'); resetBuild(); }} className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Home</a>
          <a onClick={() => { setSelectedScreen('BuildScreen'); resetBuild(); }} className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Build Screen</a>
          <a onClick={() => { setSelectedScreen('Cart'); resetBuild(); }} className="text-[#F8FAFC] hover:text-[#38BDF8] transition uppercase">Cart</a>
        </div>
        <button 
          onClick={() => setSelectedScreen('BuildScreen')}
          className="bg-[#38BDF8] text-[#0F172A] px-5 py-2 rounded-full font-bold hover:bg-[#A855F7] hover:text-[#F8FAFC] transition">
            Get Started
        </button>
      </nav>
      {console.log(selectedScreen)}
      {selectedScreen === 'Home' && (
        <>
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
          <button 
          onClick={() => setSelectedScreen('BuildScreen')}
          className="bg-[#38BDF8] text-[#0F172A] px-8 py-4 rounded-lg font-bold hover:bg-[#A855F7] hover:text-[#F8FAFC] transition">
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

     <LiveCompatibility
        partsData={partsData}
        compatibleCategory={compatibleCategory}
        setCompatibleCategory={setCompatibleCategory}
        onPartSelect={handleSandboxPartSelection}
        issues={compatibilityIssues}
        isPerfect={isPerfectMatch}
        selectedCPU={selectedCPU}
        selectedMOBO={selectedMOBO}
        selectedRAM={selectedRAM}
        />
      

     <ShopByCategory 
        setSelectedScreen={setSelectedScreen}
        setBuildFilter={setBuildFilter}
     />
      </>
     
     )}
     
     

     {/* Build Screen Section */}
     {selectedScreen === 'BuildScreen' && (
        <BuildScreen
          selectedScreen={selectedScreen}
          setSelectedScreen={setSelectedScreen}
          partsData={partsData}
          isPartDisabled={isPartDisabled}
          buildFilter={buildFilter}
          onPartSelect={handleSandboxPartSelection}
          selectedStorage={selectedStorage}
          setSelectedStorage={setSelectedStorage}
          selectedCPU={selectedCPU}
          setSelectedCPU={setSelectedCPU}
          selectedMOBO={selectedMOBO}
          setSelectedMOBO={setSelectedMOBO}
          selectedRAM={selectedRAM}
          setSelectedRAM={setSelectedRAM}
          selectedGPU={selectedGPU}
          setSelected GPU={setSelectedGPU}
          selectedCASE={selectedCASE}
          setSelectedCASE={setSelectedCASE}
          selectedPSU={selectedPSU}
          setSelectedPSU={setSelectedPSU}
        />
     )}

     {/* Cart / Checkout Screen Section */}
      {selectedScreen === 'Cart' && (
        <CheckoutScreen 
        selectedParts={selectedParts}
        calculateTotal={calculateTotal}
        setSelectedScreen={setSelectedScreen}
        />

      )}

     <Footer 
        setSelectedScreen={setSelectedScreen}
     />

     
    </div>
  )
}

export default App;