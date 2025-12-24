import React from 'react';

const ShopByCategory = ({ setSelectedScreen, setBuildFilter }) => {
    const categories = [
        { id: 'office', label: 'Office Build', description: 'Reliable & Efficient', icon: '📁'},
        { id: 'budget', label: 'Budget Gamer', description: '1080p Performance', icon: '🎮'},
        { id: 'gamer', label: 'Pro Gamer', description: '1440p High Refresh', icon: '⚡'},
        { id: 'pro', label: 'Extreme Performance', description: '4K Ultra', icon: '🔥' }
    ];

    return (
       <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-bold mb-8 text-[#F8FAFC] font-mono tracking-tighter uppercase border-l-4 border-[#A855F7] pl-4">
          Build by Category  
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => { 
                    setBuildFilter(cat.id);
                    setSelectedScreen('BuildScreen');
                  }}
                  className="group relative bg-[#1E293B] border-2 border-slate-800 hover:border-[#A855F7] p-8 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                    {/* The Glow Overlay (Self-closing so it doesn't hide text) */}
                    <div className="absolute inset-0 bg-[#A855F7] opacity-0 group-hover:opacity-5 transition-opacity" />

                    {/* Text Section (Moved outside the opacity div) */}
                    <div className="relative z-10">
                        <div className="text-3xl mb-4">{cat.icon}</div>
                        <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#A855F7] transition-colors">
                            {cat.label}
                        </h4>
                        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                            {cat.description}
                        </p>
                    </div>

                    {/* Corner Accent (Moved outside the opacity div) */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#A855F7] opacity-10 translate-x-4 -translate-y-4 rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </div>
            ))}
        </div>
       </section> 
    )
}

export default ShopByCategory;