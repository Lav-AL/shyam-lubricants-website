import { motion } from "framer-motion"
import { CheckCircle2, ShieldAlert, Zap, Globe } from "lucide-react"
import productImg from "@/assets/product-20w40.jpg"

export function ProductOverview() {
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
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-brand-red/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-200/80 bg-carbon">
                <img 
                  src={productImg} 
                  alt="COSMOGOLD SYNTH-TEC 4T 20W-40" 
                  loading="lazy" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                />
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-dark-grey mb-3 uppercase tracking-wide">
              SYNTH-TEC <span className="text-brand-red">4T</span>
            </h2>
            <div className="text-lg text-gray-500 font-bold mb-8 tracking-[0.2em] uppercase">Premium 4-Stroke Engine Oil</div>
            
            <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-xl">
              Formulated with state-of-the-art synthetic technology, COSMOGOLD SYNTH-TEC 4T provides unparalleled protection for high-performance motorcycles and scooters.
            </p>

            {/* Tech Specs Grid */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-12 max-w-xl">
              <div className="bg-white p-6 rounded-2xl border border-silver/40 border-t-[4px] border-t-silver shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-t-brand-red hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center">
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-2 font-bold">Viscosity</div>
                <div className="text-brand-red font-black text-2xl lg:text-4xl font-display">20W-40</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-silver/40 border-t-[4px] border-t-silver shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-t-brand-red hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center">
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-2 font-bold">Volume</div>
                <div className="text-dark-grey font-black text-2xl lg:text-4xl font-display">900<span className="text-lg lg:text-2xl ml-1 text-gray-500">ml</span></div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-silver/40 border-t-[4px] border-t-silver shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-t-brand-red hover:-translate-y-1 transition-all duration-300 text-center flex flex-col justify-center">
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-2 font-bold">Standard</div>
                <div className="text-dark-grey font-black text-2xl lg:text-4xl font-display">API SN</div>
              </div>
            </div>

            {/* Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="flex items-center gap-4 p-5 bg-white border border-silver/40 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
                <ShieldAlert className="text-brand-red shrink-0" size={24} />
                <span className="text-dark-grey font-bold uppercase text-[13px] md:text-sm tracking-widest">Maximum Protection</span>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white border border-silver/40 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-brand-red/30 transition-all duration-300">
                <Zap className="text-brand-red shrink-0" size={24} />
                <span className="text-dark-grey font-bold uppercase text-[13px] md:text-sm tracking-widest">Fuel Saving Tech</span>
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

          </motion.div>
        </div>
      </div>
    </section>
  )
}

