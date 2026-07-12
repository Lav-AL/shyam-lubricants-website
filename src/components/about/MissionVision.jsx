import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-24 bg-gray-50 border-y border-silver/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-14 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-silver/40 flex flex-col items-start relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
            <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-8 relative z-10">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-display font-black text-dark-grey uppercase tracking-wide mb-6 relative z-10">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              To manufacture and distribute premium automotive lubricants that consistently exceed industry standards, ensuring maximum engine protection, extended longevity, and optimized performance for our customers' vehicles under all operating conditions.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-carbon p-10 lg:p-14 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-silver/20 flex flex-col items-start relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 relative z-10">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-display font-black text-white uppercase tracking-wide mb-6 relative z-10">
              Our Vision
            </h3>
            <p className="text-white/80 text-lg leading-relaxed relative z-10">
              To establish SHYAM LUBRICANTS and the COSMOGOLD brand as the most trusted and sought-after name in the regional automotive lubricant sector, recognized for unwavering integrity, technological innovation, and exceptional customer support.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
