import { motion } from "framer-motion"
import { ArrowRight, Handshake } from "lucide-react"

export function DealerInvite() {
  const waUrl = "https://wa.me/917975814984?text=Hello,%20I%20am%20interested%20in%20becoming%20a%20dealer%20for%20COSMOGOLD%20lubricants."

  return (
    <section className="py-24 bg-brand-red relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black rounded-full mix-blend-multiply blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 backdrop-blur-sm border border-white/20">
            <Handshake size={40} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-wide mb-6">
            Partner With Us
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
            We are rapidly expanding our network. Retailers, wholesalers, and distributors are invited to join hands with SHYAM LUBRICANTS for lucrative dealership opportunities.
          </p>

          <a 
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-10 py-5 bg-white text-brand-red font-bold uppercase tracking-widest rounded-md hover:bg-carbon hover:text-white transition-all duration-300 items-center gap-3 group shadow-2xl"
          >
            Become a Dealer
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
