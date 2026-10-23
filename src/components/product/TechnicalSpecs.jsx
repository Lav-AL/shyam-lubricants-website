import { motion } from "framer-motion"
import { Settings, Shield, Zap, RefreshCw, BarChart } from "lucide-react"

export function TechnicalSpecs() {
  const specs = [
    { label: "Engine Type", value: "4-Stroke", icon: <Settings className="text-brand-red" size={24} /> },
    { label: "Viscosity Grades", value: "20W-40 & 20W-50", icon: <BarChart className="text-brand-red" size={24} /> },
    { label: "API Standard", value: "SN", icon: <Shield className="text-brand-red" size={24} /> },
    { label: "JASO Standard", value: "MA2", icon: <Shield className="text-brand-red" size={24} /> },
    { label: "Packaging Options", value: "900 ml & 1 Ltr", icon: <RefreshCw className="text-brand-red" size={24} /> },
    { label: "Emission Standard", value: "BS-VI Compliant", icon: <Zap className="text-brand-red" size={24} /> }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-b border-silver/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">Engineering Data</div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
            Technical Specifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {specs.map((spec, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-silver/40 p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-brand-red/40 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center mb-6 border border-brand-red/10 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent transition-all duration-500">
                {spec.icon}
              </div>
              <div className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-3 font-semibold">
                {spec.label}
              </div>
              <div className="text-dark-grey font-black text-2xl md:text-3xl font-display uppercase tracking-wide">
                {spec.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
