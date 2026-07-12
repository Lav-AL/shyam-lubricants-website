import { motion } from "framer-motion"
import { Clock } from "lucide-react"

export function BusinessHours() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-silver/40 rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full" />
          
          <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mx-auto mb-6 relative z-10">
            <Clock size={32} />
          </div>
          
          <h2 className="text-3xl font-display font-black text-dark-grey uppercase tracking-wide mb-8 relative z-10">
            Business Hours
          </h2>
          
          <div className="flex flex-col gap-4 max-w-md mx-auto relative z-10">
            <div className="flex justify-between items-center py-4 border-b border-silver/40">
              <span className="font-bold text-gray-700 uppercase tracking-wide">Monday – Saturday</span>
              <span className="text-gray-500 font-medium">[ 09:00 AM - 06:00 PM ] *</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-silver/40">
              <span className="font-bold text-gray-700 uppercase tracking-wide">Sunday</span>
              <span className="text-brand-red font-medium uppercase tracking-widest">[ Closed ] *</span>
            </div>
            
            <p className="text-xs text-gray-400 mt-4 italic">
              * Note: Exact timings are editable placeholders and subject to confirmation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
