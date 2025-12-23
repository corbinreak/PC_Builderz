 import React from 'react';
 import partsData from '../data/parts.json';

 function BuildScreen({ selectedCPU, setSelectedCPU, selectedMOBO, setSelectedMOBO, selectedRAM, setSelectedRAM }) {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC] font-sans pt-10 pb-20">
      <h3 className="text-3xl font-bold mb-10 text-center">Build Your PC</h3>
       
    {/* CPU Selection Section */}
 
      <section className="max-w-6xl mx-auto p-6">
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
      </section>
      {/* MoBo Selection Section */}
      <section className="max-w-6xl mx-auto p-6 mb-20">
        <h3 className="text-2xl font-bold mb-6 font-sans">
          Choose a Motherboard 
            {selectedCPU && <span className="text-sm font-normal text-slate-500 ml-4">({selectedCPU.socket}) Compatible</span>}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partsData.MOBO
          .filter((mobo) => {
            //LOGIC: If no CPU is picked, show nothing (or all)
            if (!selectedCPU) return false;

            //LOGIC: Only return movos where the socket matces
            return mobo.socket === selectedCPU.socket;
          })
          .map((mobo) => (
            <div key={mobo.id} className="p-6 bg-[#1e293B] rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-2">{mobo.name}</h4>
              <p className="font-mono text-[#38BDF8]">${mobo.price}</p>
              <button
                className="mt-4 bg-slate-700 px-4 py-2 rounded-lg hover:bg-[#38BDF8] transition"
                onClick={() => setSelectedMOBO(mobo)}
              >
                Select Motherboard
              </button>
            </div>
          ))}
        </div>
        {/* Feedback if no CPU is selected */}
        {!selectedCPU && (
          <div className="p-10 border border-dashed border-slate-800 rounded-2xl text-center text-slate-500">
            Please select a CPU to see compatible motherboards.
          </div>
        )}
      </section>
    </div>
  )
}
export default BuildScreen;
      