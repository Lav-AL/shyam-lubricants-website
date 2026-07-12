import { motion } from "framer-motion"
import { ShieldCheck, HeartHandshake, Lightbulb, Link2, Users, Scale } from "lucide-react"

export function CoreValues() {
  const values = [
    { icon: <ShieldCheck size={28} />, title: "Quality", desc: "Uncompromising standards in every batch we produce." },
    { icon: <HeartHandshake size={28} />, title: "Trust", desc: "Building lasting relationships through transparency." },
    { icon: <Lightbulb size={28} />, title: "Continuous Improvement", desc: "Always refining our formulations and processes." },
    { icon: <Link2 size={28} />, title: "Reliability", desc: "Consistent performance you can depend on daily." },
    { icon: <Users size={28} />, title: "Customer Focus", desc: "Your engine's health is our primary priority." },
    { icon: <Scale size={28} />, title: "Integrity", desc: "Honest business practices and verifiable claims." }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-b border-silver/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">Our Foundation</div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
            Core Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-silver/40 p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-red/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-500">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold text-dark-grey mb-3 uppercase tracking-wide">
                {val.title}
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
