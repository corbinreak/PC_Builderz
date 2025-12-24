import React from 'react';

const BuildScreen = ({ partsData, buildFilter, onPartSelect, selectedCPU, selectedMOBO, selectedRAM, selectedGPU }) => {
    // Helper to filter parts based on the Shop/Build filter
    const getFilteredParts = (category) => {
      const parts = partsData?.[category] || [];


      if (!buildFilter === 'office') return parts.filter(p => p.price < 150);
      if (buildFilter === 'budget') return parts.filter(p => p.price >= 150 && p.price < 400);
      if (buildFilter === 'pro') return parts.filter(p => p.price >= 800);

      return parts; // Gamer or all returns the full list
      
    };

    const calculateTotal = () => {
      const parts =[selectedCPU, selectedMOBO, selectedRAM, selectedGPU];
      return parts.reduce((sum, part) => + (part?.price || 0), 0).toFixed(2);
    };
  
  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12 text-[#F8FAFC]">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-2">
          <div classNmae="h=8 w-1 bg-[#A855F7]"></div>
            <h2 className="text-3xl font-black tacking-tighter uppercase">
              Build Configuator
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-500 uppercase tracking-[0.3em]">
              Active Filter: <span className="text-[38BDF8]">{buildFilter || 'None'}</span>
          </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Part Selection Area */}
        <div className="lg:col-span-2 space-y-12">
          {['CPU', 'MOBO', 'RAM', 'GPU'].map((category) => {
            const displayParts = getFilteredParts(category);

            return (
              <div key={category} className="border-b border-slate-800 pb-10 last:border-0">
                <h3 className="text-[#38BDF8] font-mono text-sm uppercase flex itemse-center gap-2">
                  <span className="opacity-50">0{['CPU', 'MOBO', 'RAM', 'GPU'].indexOf(category) + 1}</span>
                  {category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayParts.length === 0 ? (
                    displayParts.map((part) => {
                      const isSelected = 
                        selectedCPU?.name === part.name ||
                        selectedMOBO?.name === part.name ||
                        selectedRAM?.name === part.name ||
                        selectedGPU?.name === part.name;
                      return (
                        <div 
                          key={part.id || part.name}
                          onClick={() => onPartSelect(category, part.name)}
                          className={`group p-4 rounded-xl border-2 transition-all cursor-pointer flex justify-between itemse-center ${
                            isSelected 
                            ? "bg-[#1E293B] border-[#A855F7] ring-1 ring-[#A855F7]"
                            : "bg-[#1E293B] border-slate-800 hover:border-slate-600" 
                          }`} 
                        >
                          <div>
                            <h4 className="font-bold text-lg mb-1">{part.name}</h4>
                            <p className="text-[#38BDF8] font-mono text-xs">${part.price.toFixed(2)}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected ? "bg-[#A855F7] border-[#A855F7]" : "border-slate-700"
                          }`}>
                            {isSelected && <span className="text-white text-[10px]">✓</span>}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-slate-600 text-xs italic">No parts found for this category filter.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

          {/* Spec Sheet Area */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1E293B] border-2 border-slate-800 p-8 rounded-2xl sticky top-8 shadow-2xl">
              <h3 className="text-white font-black text-2xl mb tracking-tighter italic">Spec Sheet</h3>

              <div className="space-y-6 mb-10">
                {[
                  { label: 'Processor', val: selectedCPU },
                  { label: 'Motherboard', val: selectedMOBO },
                  { label: 'Memory', val: selectedRAM },
                  { label: 'Graphics Card', val: selectedGPU }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col border-l border-slate-700 pl-4">
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-widest">{item.label}</span>
                    <span className="text-sm font-bold truncate">
                      {item.val ? item.val.name : <span className="text-rose-700">None Selected</span>}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-xs font-mono text-slate-400 uppercase">Est. Total</span>
                  <span className="text-3xl font-black text-[#38BDF8]">${calculateTotal()}</span>
                </div>

                <button className="w-full bg-[#38BDF8] hover:bg-[#A855F7] text-[#0F172A] font-black py-4 rounded-xl transition-all uppercase tracking-tighter shadow-lg shadow-blue-500/10">
                  Review & Checkout
                </button>
              </div>
            </div>
          </aside>

      </div>
    </div>
  )
}

export default BuildScreen;