import { motion } from "framer-motion"
import { Camera } from "lucide-react"

// Import assets
import companyBanner from "@/assets/company-banner.jpeg"
import product20w40 from "@/assets/product-20w40.jpg"
import product20w50 from "@/assets/product-20w50.jpg"
import heroBottles from "@/assets/hero-bottles.jpg"

export function CompanyGallery() {
  const images = [
    { src: heroBottles, alt: "COSMOGOLD SYNTH-TEC 4T Range" },
    { src: companyBanner, alt: "SHYAM LUBRICANTS Facility Banner" },
    { src: product20w40, alt: "COSMOGOLD SYNTH-TEC 4T 20W-40 (900ml)" },
    { src: product20w50, alt: "COSMOGOLD SYNTH-TEC 4T 20W-50 (1 Ltr)" }
  ]

  return (
    <section className="py-24 bg-carbon border-y border-silver/10 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4 text-brand-red">
            <Camera size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-wide">
            Company Gallery
          </h2>
          <p className="text-silver/80 mt-4 max-w-2xl mx-auto font-medium">
            A glimpse into our brand, our products, and our commitment to excellence.
          </p>
        </motion.div>

        {/* Gallery Grid prepared for expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-silver/20 rounded-2xl overflow-hidden group aspect-video relative flex items-center justify-center p-4 hover:border-brand-red/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-carbon/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold tracking-widest uppercase text-sm border-b-2 border-brand-red pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover drop-shadow-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
