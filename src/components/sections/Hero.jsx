import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import heroImg from "@/assets/hero-bottles.jpg"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-carbon">
      {/* Soft Red Glow - refined for a more premium feel */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand-red/15 rounded-full blur-[100px] opacity-80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-8 lg:mt-0 pb-16 lg:pb-0">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-5 py-1.5 mb-8 border border-brand-red/40 rounded-full bg-brand-red/10 text-white/90 font-medium text-xs md:text-sm tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(216,27,33,0.15)]"
          >
            Premium 4 Stroke Engine Oil
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-8 text-white tracking-tight">
            COSMOGOLD <br />
            <span className="text-brand-red drop-shadow-[0_4px_12px_rgba(216,27,33,0.25)]">
              SYNTH-TEC 4T
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            <strong className="text-white font-semibold">Maximum Protection.</strong> <strong className="text-white font-semibold">Maximum Performance.</strong> <strong className="text-white font-semibold">Maximum Fuel Saving.</strong> <br className="hidden md:block"/>
            <span className="inline-block mt-3 opacity-90">The official export-quality lubricant engineered for modern, high-performance engines.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <Link 
              to="/product"
              className="w-full sm:w-auto px-10 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red-dark transition-all duration-300 shadow-[0_8px_25px_rgba(216,27,33,0.35)] hover:shadow-[0_12px_35px_rgba(216,27,33,0.5)] hover:-translate-y-0.5 text-center"
            >
              Explore Product
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/30 text-white/90 font-bold uppercase tracking-wider rounded-md hover:border-silver hover:bg-white/5 hover:text-white transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Floating Bottle Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center items-center py-4 lg:py-0"
        >
          {/* Subtle Ambient Glow matching gold & green splashes */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/15 via-brand-red/10 to-emerald-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
          
          <motion.div 
            className="relative z-10 w-full max-w-[560px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10"
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src={heroImg} 
              alt="COSMOGOLD SYNTH-TEC 4T Engine Oil" 
              fetchpriority="high"
              loading="eager"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Discover</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  )
}
