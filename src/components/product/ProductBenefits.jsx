import { motion } from "framer-motion"
import { ShieldCheck, Zap, Droplet, Flame, Gauge, Clock, Bike, Car, Settings } from "lucide-react"

export function ProductBenefits() {
  const benefits = [
    { title: "Maximum Protection", icon: <ShieldCheck size={28} />, desc: "Advanced synthetic polymers prevent engine wear." },
    { title: "Fuel Saving", icon: <Zap size={28} />, desc: "Low friction formulation improves mileage." },
    { title: "Superior Lubrication", icon: <Droplet size={28} />, desc: "Maintains strong oil film at high RPMs." },
    { title: "Long Engine Life", icon: <Clock size={28} />, desc: "Prevents sludge build-up for longevity." },
    { title: "Heat Resistance", icon: <Flame size={28} />, desc: "Exceptional thermal stability under stress." },
    { title: "Smooth Performance", icon: <Gauge size={28} />, desc: "Optimized clutch control and gear shifts." }
  ]

  const applications = [
    { title: "Motorcycle", icon: <Bike size={32} /> },
    { title: "Scooter", icon: <Bike size={32} /> }, // Using Bike as a fallback for Scooter if no scooter icon exists
    { title: "4-Stroke Engine", icon: <Settings size={32} /> },
    { title: "BS-VI Vehicles", icon: <Car size={32} /> }
  ]

  return (
    <section className="py-16 bg-carbon border-y border-silver/10 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-brand-red/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Applications / Suitable Vehicles */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-wide">
              Applications & Suitable Vehicles
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 max-w-4xl mx-auto">
            {applications.map((app, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:bg-brand-red/10 hover:border-brand-red/30 transition-all group cursor-default"
              >
                <div className="text-brand-red group-hover:scale-110 transition-transform">
                  {app.icon}
                </div>
                <span className="text-white font-bold tracking-wider uppercase text-sm md:text-base">
                  {app.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-wide">
              Core Benefits
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {benefits.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-brand-red hover:shadow-[0_10px_30px_rgba(216,27,33,0.15)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-red/20 text-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-wide uppercase">
                  {item.title}
                </h4>
                <p className="text-white/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
