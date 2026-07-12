import { motion } from "framer-motion"
import companyBanner from "@/assets/company-banner.jpeg"

export function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-carbon border-y border-silver/10 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-brand-red/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-silver font-bold tracking-widest uppercase mb-4 text-sm">The Heritage of Excellence</div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 tracking-wide">
              SHYAM LUBRICANTS
            </h2>
            
            <div className="mb-10 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-silver/20 max-w-2xl mx-auto">
              <img src={companyBanner} alt="SHYAM LUBRICANTS Banner" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>

            <p className="text-silver text-lg md:text-xl leading-relaxed mb-12 font-light">
              As a leading <strong className="text-white font-bold">Manufacturer</strong>, <strong className="text-white font-bold">Retailer</strong>, and <strong className="text-white font-bold">Wholesaler</strong> of premium automotive lubricants, SHYAM LUBRICANTS has established a legacy of uncompromising quality. Our flagship brand, COSMOGOLD, represents the pinnacle of our engineering capabilities—delivering true export-quality performance that industry professionals trust and riders demand worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-silver/10 pt-12">
              <div className="group">
                <div className="text-4xl font-display font-black text-brand-red mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-white font-semibold uppercase tracking-wider text-sm">Quality Assured</div>
              </div>
              <div className="group">
                <div className="text-4xl font-display font-black text-brand-red mb-2 group-hover:scale-110 transition-transform">BS-VI</div>
                <div className="text-white font-semibold uppercase tracking-wider text-sm">Compliant</div>
              </div>
              <div className="group">
                <div className="text-4xl font-display font-black text-brand-red mb-2 group-hover:scale-110 transition-transform">Global</div>
                <div className="text-white font-semibold uppercase tracking-wider text-sm">Export Standards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
