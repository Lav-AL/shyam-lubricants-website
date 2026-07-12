import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { SITE_CONFIG } from "@/config/constants"

export function CatalogHero() {
  const callUrl = `tel:${SITE_CONFIG.contact.phonePrimary.replace(/[^0-9+]/g, '')}`

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-carbon relative overflow-hidden">
      {/* Soft Red Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[100vw] h-[50vw] bg-brand-red/10 rounded-[100%] blur-[120px] opacity-60 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-block px-5 py-1.5 mb-8 border border-silver/30 rounded-full bg-white/5 text-silver font-medium text-xs md:text-sm tracking-[0.2em] uppercase shadow-sm">
            Official Catalog
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-6 text-white tracking-tight">
            COSMOGOLD <br />
            <span className="text-brand-red drop-shadow-[0_4px_12px_rgba(216,27,33,0.25)]">
              Products
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 mx-auto font-light leading-relaxed">
            Premium Automotive Lubricants engineered for superior engine protection, maximum fuel efficiency, and uncompromising performance.
          </p>

          <a 
            href={callUrl}
            className="inline-flex px-8 py-4 bg-transparent border-2 border-white/30 text-white/90 font-bold uppercase tracking-wider rounded-md hover:border-silver hover:bg-white/5 hover:text-white transition-all duration-300 items-center gap-3 group"
          >
            <Phone size={20} className="group-hover:scale-110 transition-transform" />
            Contact Dealer
          </a>
        </motion.div>
      </div>
    </section>
  )
}
