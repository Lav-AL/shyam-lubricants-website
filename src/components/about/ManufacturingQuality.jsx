import { motion } from "framer-motion"
import { ShieldCheck, Target, Droplets } from "lucide-react"

export function ManufacturingQuality() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block px-4 py-1.5 border border-silver/30 rounded-full bg-white text-brand-red font-bold text-xs md:text-sm tracking-[0.2em] uppercase w-fit shadow-sm">
              Manufacturing & Standards
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-black text-dark-grey leading-tight uppercase tracking-wide">
              Precision Engineered for Perfection
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our manufacturing process follows strict professional practices to ensure every drop of lubricant meets rigorous specifications. We implement advanced quality control mechanisms at every stage of production.
            </p>
            
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-silver/40 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-brand-red/30 hover:-translate-y-1 transition-all duration-300 group">
                <ShieldCheck className="text-brand-red shrink-0 group-hover:scale-110 transition-transform duration-300" size={28} />
                <div>
                  <h4 className="font-bold text-dark-grey tracking-wide uppercase text-sm md:text-base mb-1">API Standards</h4>
                  <p className="text-gray-500 text-sm font-medium">Formulations meet American Petroleum Institute (API) specifications for modern engine protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-silver/40 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-brand-red/30 hover:-translate-y-1 transition-all duration-300 group">
                <Target className="text-brand-red shrink-0 group-hover:scale-110 transition-transform duration-300" size={28} />
                <div>
                  <h4 className="font-bold text-dark-grey tracking-wide uppercase text-sm md:text-base mb-1">JASO Standards</h4>
                  <p className="text-gray-500 text-sm font-medium">Compliance with Japanese Automotive Standards Organization (JASO) specifically for 4-stroke motorcycles.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-silver/40 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-brand-red/30 hover:-translate-y-1 transition-all duration-300 group">
                <Droplets className="text-brand-red shrink-0 group-hover:scale-110 transition-transform duration-300" size={28} />
                <div>
                  <h4 className="font-bold text-dark-grey tracking-wide uppercase text-sm md:text-base mb-1">BS-VI Compatibility</h4>
                  <p className="text-gray-500 text-sm font-medium">Engineered to be fully compatible with BS-VI emission norms, protecting catalytic converters.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Visual representation of manufacturing/quality */}
            <div className="aspect-square rounded-3xl bg-carbon p-12 relative overflow-hidden flex flex-col items-center justify-center border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-carbon to-carbon" />
              
              <div className="relative z-10 text-center">
                <ShieldCheck size={80} className="text-brand-red mx-auto mb-6" />
                <h3 className="text-3xl font-display font-black text-white uppercase tracking-widest mb-2">
                  Quality
                </h3>
                <h3 className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-silver to-white uppercase tracking-widest">
                  Assured
                </h3>
                <div className="w-16 h-1 bg-brand-red mx-auto mt-6 rounded-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
