import React, { useState } from 'react';

const CheckoutScreen = ({ selectedParts, calculateTotal, setSelectedScreen }) => {
    const [ isProcessing, setIsProcessing ] = useState(false);
    const [ isSuccess, setIsSucess ] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        // Simulate payment processing
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSucess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0F172A] p-6">
                <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="text-6xl text-[#A855F7]">✓</div>
                        <h2 className="text-3xl font-black text-white uppercase italic">Order Confirmed!</h2>
                        <p className="text-slate-400 font-mono tracking-widest">TRANSACTION_ID: #PC-77291-BLD</p>
                        <button
                            onClick={() => setSelectedScreen('Home')}
                            className="mt-8 px-8 py-3 bg-[#38BDF] text-[#0F172A] font-bold rounded-lg uppercase tracking-tighter hover:bg-[#A855F7] transition-all"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
        )
    }   
    return (
        <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12 text-[#F8FAFC]">
          <div className="max-w-5xl mx-auto">
              <button 
                onClick={() => setSelectedScreen('BuildScreen')}
                className="mb-8 text-xs font-mono text-slate-500 hover:text-[#38BDF8] flex items-center gap-2"
              >
                ← Back to Build Screen
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Side: Mock Stripe Payment Form */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-black tracking-tighter uppercase italic border-l-4 border-[#38BDF8] pl-4">
                        Order Summary
                    </h2>

                    <form onSubmit={handlePayment} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Email Address</label>
                            <input required type="email" placeholder="Build@PCBUILDERZ.COM" className="w-full bg-[#1e293B] border border-slate-700 p-3 rounded text-sm focus:border-[#A855F7] outline-none" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Card Information</label>
                            <div className="bg-[#1E293B] border border-slate-700 p-3 rounded flex items-center gap-4">
                                <input required type="text" placeholder="1234 5678 1234 5678" className="bg-transparent w-full text-sm outline-none" />
                                <input required type="text" placeholder="MM/YY" className="bg-transparent w-20 text-sm outline-none" />
                                <input required type="text" placeholder="CVC" className="bg-transparent w-16 text-sm outline-none" />
                            </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Full Name</label>
                                <input required type="text" placeholder="Gamer One" className="w-full bg-[#1E293B] border border-slate-700 p-3 rounded text-sm focus:border-[#A855F7] outline-none" />
                            </div>

                            <button 
                              type="submit"
                              disabled={isProcessing}
                              className="w-full bg-[#A855F7] hover:bg-[#38BDF8] text-white font-black py-4 rounded-xl transition-all uppercase tracking-tighter mt-4"
                            >
                                {isProcessing ? 'Processing...' : `Pay $${calculateTotal()}`}
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Selected Parts Summary */}
                    <aside className="bg-[#1E293B] p-8 rounded-2xl border border-slate-800 h-fit">
                        <h3 className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em] mb-6">Build Review</h3>
                        <div className="space-y-4">
                            {[ 'CPU', 'MOBO', 'GPU', 'RAM' ].map((type) => (
                                <div key={type} className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400 font-mono">{type}</span>
                                    <span className="text-white font-bold truncate text-right">{selectedParts[type]?.name || 'Not Configured'}</span>
                                </div>
                            ))}
                            <div className="pt-6 border-t border-slate-700 flex justify-between items-center">
                                <span className="text-slate-400 font-mono">Total</span>
                                <span className="text-white font-bold">${calculateTotal()}</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}   
  export default CheckoutScreen;
