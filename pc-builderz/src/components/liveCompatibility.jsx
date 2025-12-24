function LiveCompatibility({ partsData, compatibleCategory, setCompatibleCategory, onPartSelect, issues, isPerfect, selectedCPU, selectedMOBO, selectedRAM, selectedGPU }) {
    const handleCategoryChange = (e) => {
        setCompatibleCategory(e.target.value);

    

    }
    
    return (
        <div className="max-w-6xl bg-[#0F172A] mx-auto rounded-xl p-6 mb-20 border border-slate-800">
           {/* Status Banner */}
           <div className="mb-8">
            {issues.map((error, index) => (
                <div key={index}
                     onClick={() => onPartSelect(compatibleCategory, part.name)}
                     className="bg-red-500/10 border border-red-500/50 p-4 rounded-lg text-red-400 mb-4 flex justify-between items-center cursor-pointer">
                    !!! {error} !!!
                </div>
            ))}
              {isPerfect && (
                <div className="bg-emerald-500/10 border border-emerald-500/50 p-4 rounded-lg text-emerald-400 flex justify-between items-center">
                    <span> ✓ Perfect Compatibility! </span>
                    <button 
                    onClick={() => setSelectedScreen('BuildScreen')}
                    className="bg-emerald-500 text-white px-4 py-2 rounded font-bold cursor-pointer">Lets Build!</button> 
                </div>
              )}   
              
            </div> 
            
            <div>
            <h3 className="text-2xl font-bold mb-6 text-[#F8FAFC]">Live Compatibility Checker</h3>
            <p className="text-[#F8FAFC] opacity-70 mb-4 font-mono">
                Select a part category to view compatible components in real-time before you build your PC.
            </p>
            </div>
           {/* select a category dropdown */}
           <div className="flex flex-col md:flex-row gap-8 items-start">
               <select 
                value={compatibleCategory}
                onChange={handleCategoryChange}
                className="w-min bg-[#1e293B] border border-[#38BDF8] border-opacity-20 text-[#F8FAFC] p-4 rounded-lg focus:outline-none focus:border-opacity-100 transition-all font-sans">
                    <option value="">- Choose a Part -</option>
                    <option value="CPU">CPU</option>
                    <option value="MOBO">Motherboard</option>
                    <option value="RAM">RAM</option>
                    <option value="GPU">GPU</option>
                </select>
            {/* Part Summary */}
             <div className="bg-[#1E293B] border border-slate-700 p-4 rounded-lg flex-1 w-full">
                <h4 className=" text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-3">
                    Current Selection:
                </h4>
                <div className="space-y-2 text-sm">
                    {/* Check if parts are selected and display their names */}
                    <p>🔲 CPU: <span className="text-white font-bold">{selectedCPU ? selectedCPU.name : 'None Selected'}</span></p>
                    <p>🔲 Motherboard: <span className="text-white font-bold">{selectedMOBO ? selectedMOBO.name : 'None Selected'}</span></p>
                    <p>🔲 RAM: <span className="text-white font-bold">{selectedRAM ? selectedRAM.name : 'None Selected'}</span></p>
                    <p>🔲 GPU: <span className="text-white font-bold">{selectedGPU ? selectedGPU.name : 'None Selected'}</span></p>
                </div>
             </div>
            
                
            </div>
            

            {/* Display compatible parts based on selected category */}
            {compatibleCategory && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {partsData[compatibleCategory].map((part) => {
                        const isSelected = (part.name === selectedCPU?.name ||
                         part.name === selectedMOBO?.name ||
                         part.name === selectedRAM?.name
                    );

                    return (
                    <div 
                        key={part.id}
                        onClick={() => onPartSelect(compatibleCategory, part.name)}
                        className={`bg-[#1e293B] border-2 p-5 rounded-2xl cursor-pointer transition-all shadow-xl ${
                        isSelected ? "border-[#38BDF8] ring-2 ring-[#38BDF8] ring-opacity-50" : "border-slate-700"
                     }`}>
                        {/* Placeholder Image */}
                        <div className="w-full h-40 bg-[#0F172A] rounded-lg mb-4 flex items-center justify-center border border-slate-800">
                        <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">Image Placeholder</span>
                        </div>

                        {/* Text Section */}
                        <div className="space-y-2">
                        <h3 className="text-white text-lg font-bold leading-tight">
                            {part.name}
                        </h3>
                        
                        <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                            <span className="text-[#38BDF8] font-mono font-bold text-lg">
                            ${part.price}
                            </span>
                            <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded uppercase tracking-tighter">
                            {part.socket || part.type || "Specs"}
                            </span>
                          </div>
                        </div>
                      </div>
                       );
                    })}
                </div>
                )}
        </div>
            
    )
            
}

export default LiveCompatibility;