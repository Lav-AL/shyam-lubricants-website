import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail } from "lucide-react"
import { SITE_CONFIG } from "@/config/constants"

export function ContactCTA() {
  const message = encodeURIComponent("Hello! I want to inquire about stocking COSMOGOLD lubricants.")
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.phonePrimary.replace(/[^0-9]/g, '')}?text=${message}`
  const callUrl = `tel:${SITE_CONFIG.contact.phonePrimary.replace(/[^0-9+]/g, '')}`
  const emailUrl = `mailto:${SITE_CONFIG.contact.email}`

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-red to-brand-red-dark relative overflow-hidden">
      {/* Decorative BG texture/glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 uppercase tracking-wide drop-shadow-md">
            PARTNER WITH SHYAM LUBRICANTS
          </h2>
          <p className="text-white/95 text-lg md:text-xl mb-12 font-medium leading-relaxed drop-shadow-sm">
            We are actively expanding our network. Connect with us today to explore highly competitive rates for retailers, wholesalers, and bulk distributors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-5">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-red-dark font-black uppercase tracking-wider rounded-md shadow-[0_10px_25px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>
            <a 
              href={callUrl}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/90 text-white font-black uppercase tracking-wider rounded-md hover:bg-white hover:text-brand-red-dark transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Phone size={24} className="group-hover:scale-110 transition-transform" />
              Call Now
            </a>
            <a 
              href={emailUrl}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/40 text-white/90 font-bold uppercase tracking-wider rounded-md hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

