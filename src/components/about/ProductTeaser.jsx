import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import bottleFront from "@/assets/bottle-front.jpeg"

export function ProductTeaser() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-16 border border-silver/40 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center relative"
          >
            <div className="absolute inset-0 bg-brand-red/5 rounded-full blur-[60px]" />
            <img 
              src={bottleFront} 
              alt="COSMOGOLD SYNTH-TEC 4T" 
              className="w-full max-w-[280px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] relative z-10"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col text-center md:text-left items-center md:items-start"
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-dark-grey uppercase tracking-wide mb-4">
              The COSMOGOLD Range
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Experience the pinnacle of automotive lubrication. Our flagship SYNTH-TEC 4T is engineered for those who demand maximum performance and uncompromising protection.
            </p>
            <Link 
              to="/products"
              className="inline-flex px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red-dark transition-all duration-300 items-center gap-3 group shadow-[0_8px_25px_rgba(216,27,33,0.35)]"
            >
              View Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
