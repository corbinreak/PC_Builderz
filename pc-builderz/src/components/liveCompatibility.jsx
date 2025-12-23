function LiveCompatibility({ partsData, compatibleCategory, setCompatibleCategory, onPartSelect }) {
    const handleCategoryChange = (e) => {
        setCompatibleCategory(e.target.value);

    }
    return (
        <div className="max-w-6xl bg-[#0F172A] mx-auto rounded-xl p-6 mb-20 border border-slate-800">
           {/* select a category dropdown */}
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

            {/* Display compatible parts based on selected category */}
            {compatibleCategory && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {partsData[compatibleCategory].map((part) => (
                    <div 
                        key={part.id}
                        onClick={() => onPartSelect(compatibleCategory, part.name)}
                        className="bg-[#1E293B] border-2 border-slate-700 hover:border-[#38BDF8] p-5 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] shadow-xl"
                    >
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
                    ))}
                </div>
                )}
        </div>
            
    )
            
}

export default LiveCompatibility;