import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import companyBanner from "@/assets/company-banner.jpeg"

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-carbon relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-carbon/90 z-10" />
        <img 
          src={companyBanner} 
          alt="SHYAM LUBRICANTS Banner" 
          className="w-full h-full object-cover object-center opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/80 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block px-5 py-1.5 mb-8 border border-silver/30 rounded-full bg-white/5 text-silver font-medium text-xs md:text-sm tracking-[0.2em] uppercase backdrop-blur-md">
            Corporate Overview
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-6 text-white tracking-tight">
            About <br className="md:hidden" />
            <span className="text-brand-red drop-shadow-[0_4px_12px_rgba(216,27,33,0.25)]">
              SHYAM LUBRICANTS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-2xl">
            Committed to delivering premium automotive lubricants with a focus on quality, reliability and customer satisfaction.
          </p>

          <Link 
            to="/products"
            className="inline-flex px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red-dark transition-all duration-300 items-center gap-3 group shadow-[0_8px_25px_rgba(216,27,33,0.35)]"
          >
            Explore Our Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
