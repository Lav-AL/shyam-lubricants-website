import { motion } from "framer-motion"
import { Navigation } from "lucide-react"

export function LocationMap() {
  const address = "Ujjain Lohiyar, Gayghat, East Champaran, Bihar 845437"
  const encodedAddress = encodeURIComponent(address)
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
  const directionsUrl = `https://maps.google.com/?q=${encodedAddress}`

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-silver/40">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Map Display */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5 rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-silver/50 relative bg-gray-100"
          >
            <iframe 
              src={mapUrl} 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SHYAM LUBRICANTS Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

          {/* Location Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 flex flex-col items-start"
          >
            <div className="text-brand-red font-bold tracking-widest uppercase mb-4 text-sm">Headquarters</div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-dark-grey uppercase tracking-wide mb-6">
              Our Location
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We operate from our central facility in East Champaran, ensuring efficient distribution across the region.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-silver/40 mb-8 w-full">
              <h4 className="font-bold text-dark-grey uppercase tracking-wide mb-2">Address</h4>
              <p className="text-gray-600 leading-relaxed">
                Ujjain Lohiyar, Gayghat<br />
                East Champaran<br />
                Bihar - 845437<br />
                India
              </p>
            </div>

            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-dark-grey text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red transition-all duration-300 items-center gap-3 group w-full sm:w-auto justify-center"
            >
              Get Directions
              <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
