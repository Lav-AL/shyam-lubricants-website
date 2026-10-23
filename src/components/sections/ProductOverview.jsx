import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, ShieldAlert, Zap, Globe, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import product20w40 from "@/assets/product-20w40.jpg"
import product20w50 from "@/assets/product-20w50.jpg"

const variants = [
  {
    id: "20w40",
    name: "SYNTH-TEC 4T",
    tagline: "Premium 4-Stroke Engine Oil",
    viscosity: "20W-40",
    volume: "900ml",
    standard: "API SN",
    image: product20w40,
    accentGlow: "from-emerald-500/25 to-brand-red/15",
    description: "Formulated with state-of-the-art synthetic technology, COSMOGOLD SYNTH-TEC 4T 20W-40 provides maximum fuel efficiency and smooth clutch performance for modern 4-stroke motorcycles and scooters."
  },
  {
    id: "20w50",
    name: "SYNTH-TEC 4T",
    tagline: "Heavy-Duty 4-Stroke Engine Oil",
    viscosity: "20W-50",
    volume: "1 Ltr",
    standard: "API SN",
    image: product20w50,
    accentGlow: "from-amber-500/25 to-brand-red/15",
    description: "Engineered for high-temperature and heavy-load conditions, COSMOGOLD SYNTH-TEC 4T 20W-50 provides maximum protection, superior shear stability, and extended engine life."
  }
]

export function ProductOverview() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const current = variants[selectedIdx]

  return (
    <section id="product" className="py-24 bg-gray-50 relative overflow-hidden border-b border-silver/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[420px]">
              <div className={`absolute -inset-2 bg-gradient-to-r ${current.accentGlow} rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-700`} />
              <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-200/80 bg-carbon">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={current.id}
                    src={current.image} 
                    alt={`COSMOGOLD SYNTH-TEC 4T ${current.viscosity}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            {/* Variant Switcher Tabs */}
            <div className="flex items-center gap-3 mb-6">
              {variants.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-5 py-2 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedIdx === idx 
                      ? "bg-brand-red text-white shadow-[0_6px_20px_rgba(216,27,33,0.35)] -translate-y-0.5" 
                      : "bg-white text-gray-600 border border-silver/60 hover:border-brand-red/50 hover:text-dark-grey"
                  }`}
                >
                  {v.viscosity} ({v.volume})
                </button>
              ))}
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-dark-grey mb-3 uppercase tracking-wide">
              SYNTH-TEC <span className="text-brand-red">4T</span>
            </h2>
            <div className="text-lg text-gray-500 font-bold mb-8 tracking-[0.2em] uppercase">
              {current.tagline}
            </div>
            
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-xl min-h-[80px]">
              {current.description}
            </p>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-10 max-w-xl">
              <div className="bg-white p-6 rounded-2xl border border-silver/40 border-t-[4px] border-t-silver shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-t-brand-red hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center">
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-2 font-bold">Viscosity</div>
                <div className="text-brand-red font-black text-2xl lg:text-3xl font-display">{current.viscosity}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-silver/40 border-t-[4px] border-t-silver shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-t-brand-red hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center">
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-2 font-bold">Volume</div>
                <div className="text-dark-grey font-black text-2xl lg:text-3xl font-display">{current.volume}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-silver/40 border-t-[4px] border-t-silver shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-t-brand-red hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center">
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-2 font-bold">Standard</div>
                <div className="text-dark-grey font-black text-2xl lg:text-3xl font-display">{current.standard}</div>
              </div>
            </div>

            {/* Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mb-8">
              <div className="flex items-center gap-4 p-5 bg-white border border-silver/40 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
                <ShieldAlert className="text-brand-red shrink-0" size={24} />
                <span className="text-dark-grey font-bold uppercase text-[13px] md:text-sm tracking-widest">Maximum Protection</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white border border-silver/40 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
                <Zap className="text-brand-red shrink-0" size={24} />
                <span className="text-dark-grey font-bold uppercase text-[13px] md:text-sm tracking-widest">
                  {selectedIdx === 0 ? "Fuel Saving Tech" : "Maximum Performance"}
                </span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white border border-silver/40 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
                <CheckCircle2 className="text-brand-red shrink-0" size={24} />
                <span className="text-dark-grey font-bold uppercase text-[13px] md:text-sm tracking-widest">JASO MA2 & BS-VI</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white border border-silver/40 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
                <Globe className="text-brand-red shrink-0" size={24} />
                <span className="text-dark-grey font-bold uppercase text-[13px] md:text-sm tracking-widest">Export Quality</span>
              </div>
            </div>

            {/* Link to Full Catalog */}
            <div className="max-w-xl">
              <Link 
                to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-dark-grey text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.15)] group"
              >
                <span>View Full Catalog</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

