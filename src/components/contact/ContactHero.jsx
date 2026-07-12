import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export function ContactHero() {
  const callUrl = "tel:+917975814984"
  const waUrl = "https://wa.me/917975814984?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20COSMOGOLD%20lubricants."

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
            Get In Touch
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-6 text-white tracking-tight">
            Contact <br className="md:hidden" />
            <span className="text-brand-red drop-shadow-[0_4px_12px_rgba(216,27,33,0.25)]">
              SHYAM LUBRICANTS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 mx-auto font-light leading-relaxed">
            We are here to assist you with product information, dealership opportunities and customer support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={callUrl}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red-dark transition-all duration-300 items-center gap-3 group shadow-[0_8px_25px_rgba(216,27,33,0.35)]"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
              Call Now
            </a>
            
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white/90 font-bold uppercase tracking-wider rounded-md hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] transition-all duration-300 items-center gap-3 group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
