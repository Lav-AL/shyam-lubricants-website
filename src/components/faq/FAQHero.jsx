import { motion } from "framer-motion"
import { Search } from "lucide-react"

export function FAQHero({ searchTerm, setSearchTerm }) {
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
            Support Center
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black leading-[1.1] mb-6 text-white tracking-tight">
            Frequently Asked <br />
            <span className="text-brand-red drop-shadow-[0_4px_12px_rgba(216,27,33,0.25)]">
              Questions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 mx-auto font-light leading-relaxed">
            Find answers to common questions about COSMOGOLD products, dealership opportunities and customer support.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-brand-red transition-colors">
              <Search size={22} />
            </div>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for answers..."
              className="w-full bg-white/10 border border-silver/30 text-white placeholder-gray-400 rounded-xl py-4 pl-14 pr-6 focus:outline-none focus:border-brand-red focus:bg-white/15 focus:ring-1 focus:ring-brand-red transition-all shadow-lg text-lg backdrop-blur-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
