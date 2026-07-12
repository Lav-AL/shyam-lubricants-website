import { motion } from "framer-motion"
import { Award, Shield, Zap, CheckCircle2, Activity, HeadphonesIcon } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    { icon: <Award size={24} />, title: "Premium Quality", desc: "Blended from high viscosity index base stocks and advanced additives." },
    { icon: <Shield size={24} />, title: "Engine Protection", desc: "Superior wear protection for critical engine components." },
    { icon: <Zap size={24} />, title: "Fuel Efficiency", desc: "Formulated to reduce friction and improve mileage." },
    { icon: <CheckCircle2 size={24} />, title: "Quality Standards", desc: "Stringent testing ensures consistent formulation." },
    { icon: <Activity size={24} />, title: "Reliable Performance", desc: "Maintains optimal performance in extreme conditions." },
    { icon: <HeadphonesIcon size={24} />, title: "Customer Support", desc: "Dedicated support for our dealer network and customers." }
  ]

  return (
    <section className="py-24 bg-carbon border-y border-silver/10 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-brand-red/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">The Competitive Edge</div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-wide">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-start gap-5 group"
            >
              <div className="w-12 h-12 shrink-0 bg-white/5 border border-silver/20 rounded-lg flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">
                  {reason.title}
                </h4>
                <p className="text-silver/80 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
