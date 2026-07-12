import { motion } from "framer-motion"
import { Shield, Zap, ThermometerSun, Settings, Activity, Award } from "lucide-react"

export function CatalogFeatures() {
  const features = [
    { icon: <Award size={32} />, title: "Premium Quality", desc: "Manufactured to international export standards." },
    { icon: <Shield size={32} />, title: "Engine Protection", desc: "Advanced additives prevent wear and tear." },
    { icon: <Zap size={32} />, title: "Fuel Efficiency", desc: "Optimized viscosity for maximum mileage." },
    { icon: <ThermometerSun size={32} />, title: "Heat Resistance", desc: "Maintains stability under extreme temperatures." },
    { icon: <Activity size={32} />, title: "Long Engine Life", desc: "Reduces sludge and keeps engine components clean." },
    { icon: <Settings size={32} />, title: "Smooth Performance", desc: "Enhanced clutch performance for better riding." }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-y border-silver/40">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
            The COSMOGOLD Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-10 bg-white rounded-3xl border border-silver/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-red/50 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-grey mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
