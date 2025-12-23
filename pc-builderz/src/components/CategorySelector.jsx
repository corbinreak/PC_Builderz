import React from 'react';


function CategorySelector({ title, parts, selectedPart, onSelect}) {
    return (
        <div className="mb-8">
            <label className="block font-mono text-sm text[#38BDF8] uppercase tracking-widest mb-2">
               Select {title} 
            </label>
            <select 
                className="w-full bg-[#1e293B] border border-[#38BDF8] border-opacity-20 text-[#F8FAFC] p-4 rounded-lg focus:outline-none focus:border-opacity-100 transition-all font-sans"
                value={selectedPart?.id || ""}
                onChange={(e) => {
                    const part =parts.find(p => p.id === parseInt(e.target.value));
                    onSelect(part);
                
                }}
                >
                <option value="">-- Chose a {title} --</option>
                  {parts.map((part) => (
                    <option key={part.id} value={part.id}>
                        {part.name} - ${part.price}
                    </option>
                  ))}
                </select>
        </div>
    )
}