import { motion } from "framer-motion"
import { ShieldCheck, Award, ThumbsUp, Globe, CheckCircle } from "lucide-react"

export function TrustStrip() {
  const certifications = [
    { text: "API SN", icon: <CheckCircle size={20} className="text-brand-red drop-shadow-sm" /> },
    { text: "JASO MA2", icon: <ShieldCheck size={20} className="text-brand-red drop-shadow-sm" /> },
    { text: "BS-VI COMPATIBLE", icon: <ThumbsUp size={20} className="text-brand-red drop-shadow-sm" /> },
    { text: "EXPORT QUALITY", icon: <Globe size={20} className="text-brand-red drop-shadow-sm" /> },
    { text: "PREMIUM QUALITY", icon: <Award size={20} className="text-brand-red drop-shadow-sm" /> }
  ]

  return (
    <div className="w-full bg-gray-50 border-y border-silver/30 py-16 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-5 lg:gap-8 items-center">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="flex items-center gap-3 px-8 py-4 bg-white border border-silver/40 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:border-brand-red/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {cert.icon}
              <span className="font-display font-bold text-dark-grey/90 tracking-widest uppercase text-xs md:text-sm">
                {cert.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


