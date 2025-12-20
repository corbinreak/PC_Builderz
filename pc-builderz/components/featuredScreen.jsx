import partsData from '../src/data/parts.json'

function FeaturedScreen() {
    return (
       <section className="max-w-6xl bg-[#0F172A] mx-auto rounded-xl p-6 mb-20 border border-slate-800">
        <h3 className="text-2xl font-bold mb-6 text-[#F8FAFC]">Featured Builds</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partsData.featuredBuilds.map((featureBuilds) => (
                <div key={featureBuilds.id} className="group p-6 bg-[#1E293B] rounded-xl border border-[#38BDF8] border-opacity-30 hover:border-opacity-100 transition-all">
                   <div className="overflow-hidden rounded-md mb-4 bg-slate-800"> 
                    <img 
                        src={featureBuilds.image}
                        alt={featureBuilds.title} 
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>    
                    <h4 className="font-sans text-xl font-bold mb-2 text-[#F8FAFC]">{featureBuilds.title}</h4>
                    <p className="font-mono text-[#F8FAFC] opacity-70 mb-4">{featureBuilds.description}</p>
                    <p className="font-mono font-bold text-lg text-[#38BDF8]">${featureBuilds.price}</p>
                    <button
                        className="border border-[#38BDF8] bg-transparent text-[#F8FAFC] px-4 py-2 rounded-lg mt-4 hover:bg-[#38BDF8] hover:text-[#0f172A] transition font-semibold"
                    >
                        View Build
                    </button>
                </div>

            ))}
        </div>
    
    </section>
    )
}

export default FeaturedScreen;