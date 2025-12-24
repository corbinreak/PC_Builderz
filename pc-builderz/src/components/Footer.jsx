import React from 'react';


const Footer = ({ setSelectedScreen }) => {
    return (
        <footer className="bg-[#1E293B] border-t border-slate-800 py-12 px-6 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-2xl font-bold tracking-tightertext-[#38DF8] mb-6">
                    PC Builderz
                </h2>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-8 mb-8">
                    <button 
                        onClick={() => setSelectedScreen('Home')}
                        className="text-sm font-mono uppercase tracking-widest text-slate-400 hover:text-[#38BDF8] transition"
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => setSelectedScreen('BuildScreen')}
                        className="text-sm font-mono uppercase tracking-widest text-slate-400 hover:text-[#38BDF8] transition"
                    >
                        Build Screen
                    </button>
                    <button
                        onClick={() => setSelectedScreen('Cart')}
                        className="text-sm font-mono uppercase tracking-widest text-slate-400 hover:text-[#38BDF8] transition"    
                    >
                        Cart
                    </button>   
                </nav>
                 {/* Project Link */}
                  <div className="mb-8">
                        <a 
                          href="https://github.com/corbinreak/PC_Builderz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono uppercase tracking-wides text-slate-400 hover:text-[#38BDF8] transition"
                          >
                            View Project on GitHub
                        </a>
                  </div>
                  {/* Educational Note */}
                <div className="text-center space-y-3">
                    <p className="text-[#38bdf8] font-bold text-xs tracking-widest uppercase">
                        Strictly for Educational Purposes
                    </p>
                    <p className="text-slate-400 text-xs font-mono opacity-70">
                        This project is a learning exercise and is not affiliated with any hardware manufacturers.
                    </p>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-tight opacity-60">
                        <p>©  {new Date().getFullYear()} PC BUILDERZ SYSTEM // ALL RIGHTS RESERVED</p>
                    </div>
                </div>
             </div>
        </footer>
        
    )
}  

export default Footer;