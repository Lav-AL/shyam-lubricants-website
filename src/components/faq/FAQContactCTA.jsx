import { motion } from "framer-motion"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function FAQContactCTA() {
  const callUrl = "tel:+917975814984"
  const waUrl = "https://wa.me/917975814984?text=Hello,%20I%20have%20a%20question%20about%20COSMOGOLD%20lubricants."

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden border-t border-silver/30">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-silver/40 rounded-3xl p-10 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-bl-full pointer-events-none" />
          
          <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red mb-8 border border-brand-red/10 shadow-sm relative z-10">
            <MessageCircle size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide mb-6">
            Still Have Questions?
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Can't find the answer you're looking for? Our dedicated support team is ready to assist you with any inquiries regarding our products or dealership opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red-dark transition-all duration-300 items-center gap-3 group shadow-[0_8px_25px_rgba(216,27,33,0.35)]"
            >
              Contact Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-transparent border-2 border-dark-grey text-dark-grey font-bold uppercase tracking-wider rounded-md hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] transition-all duration-300 items-center gap-3 group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              WhatsApp
            </a>

            <a 
              href={callUrl}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-transparent border-2 border-dark-grey text-dark-grey font-bold uppercase tracking-wider rounded-md hover:border-brand-red hover:bg-brand-red/10 hover:text-brand-red transition-all duration-300 items-center gap-3 group"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
