import { motion } from "framer-motion"
import { ArrowLeft, Package } from "lucide-react"
import { Link } from "react-router-dom"

export function RelatedProducts() {
  const placeholders = [
    { type: "Engine Oil", name: "PREMIUM 4T 10W-30" },
    { type: "Gear Oil", name: "HEAVY DUTY 80W-90" },
    { type: "Grease", name: "LITHIUM COMPLEX MP-3" }
  ]

  return (
    <section className="py-16 bg-carbon border-y border-silver/10 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-wide">
              Complete Your Range
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/products"
              className="flex items-center gap-2 text-silver hover:text-brand-red font-bold uppercase tracking-widest text-sm transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[280px] hover:border-white/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-black/50 border border-silver/20 flex items-center justify-center mb-6 text-silver/50">
                <Package size={28} />
              </div>
              <div className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-2">Coming Soon</div>
              <h3 className="text-white font-display font-black text-xl uppercase tracking-wide opacity-50">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
