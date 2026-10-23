import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react"
import product20w40 from "@/assets/product-20w40.jpg"
import product20w50 from "@/assets/product-20w50.jpg"

export function ProductGrid({ searchTerm }) {
  // Database of live products
  const liveProducts = [
    {
      id: "synth-tec-4t-20w40",
      name: "SYNTH-TEC 4T",
      type: "Premium 4 Stroke Engine Oil",
      image: product20w40,
      link: "/product?variant=20w40",
      viscosity: "20W-40",
      volume: "900ml",
      badges: ["API SN", "JASO MA2", "BS-VI"],
      features: [
        { text: "Maximum Protection", icon: <ShieldCheck size={16} /> },
        { text: "Maximum Fuel Saving", icon: <Zap size={16} /> }
      ]
    },
    {
      id: "synth-tec-4t-20w50",
      name: "SYNTH-TEC 4T",
      type: "Premium 4 Stroke Engine Oil",
      image: product20w50,
      link: "/product?variant=20w50",
      viscosity: "20W-50",
      volume: "1 Ltr",
      badges: ["API SN", "JASO MA2", "BS-VI"],
      features: [
        { text: "Maximum Performance", icon: <ShieldCheck size={16} /> },
        { text: "Heavy Load Protection", icon: <Zap size={16} /> }
      ]
    }
  ]

  // Filter logic - matches with or without hyphens, spaces, and badges
  const cleanSearch = searchTerm.toLowerCase().replace(/[-\s]/g, '')
  const filteredProducts = liveProducts.filter(p => {
    if (!cleanSearch) return true
    const cleanName = p.name.toLowerCase().replace(/[-\s]/g, '')
    const cleanViscosity = p.viscosity.toLowerCase().replace(/[-\s]/g, '')
    const cleanType = p.type.toLowerCase().replace(/[-\s]/g, '')
    const cleanVolume = p.volume.toLowerCase().replace(/[-\s]/g, '')
    const badgesMatch = p.badges.some(b => b.toLowerCase().replace(/[-\s]/g, '').includes(cleanSearch))
    
    return cleanName.includes(cleanSearch) || 
           cleanViscosity.includes(cleanSearch) || 
           cleanType.includes(cleanSearch) ||
           cleanVolume.includes(cleanSearch) ||
           badgesMatch
  })

  // Coming Soon placeholders
  const comingSoonProducts = [
    { name: "PREMIUM 4T", viscosity: "10W-30" },
    { name: "HEAVY DUTY GEAR", viscosity: "80W-90" },
    { name: "LITHIUM COMPLEX", viscosity: "MP-3" }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between border-b border-silver/40 pb-4">
          <h2 className="text-xl font-bold text-dark-grey tracking-wide uppercase">
            Product Portfolio
          </h2>
          <span className="text-gray-500 font-medium text-sm">
            Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Live Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-silver/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-red/40 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row group"
            >
              {/* Product Image Side */}
              <div className="sm:w-2/5 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-auto h-[250px] max-w-full rounded-2xl object-cover drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
                />
              </div>

              {/* Product Info Side */}
              <div className="sm:w-3/5 p-8 flex flex-col">
                <div className="text-brand-red text-xs font-bold tracking-widest uppercase mb-2">
                  {product.type}
                </div>
                <h3 className="text-3xl font-display font-black text-dark-grey mb-4">
                  {product.name}
                </h3>
                
                {/* Specifications Grid */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-dark-grey text-xs font-bold tracking-widest uppercase rounded">
                    {product.viscosity}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-dark-grey text-xs font-bold tracking-widest uppercase rounded">
                    {product.volume}
                  </span>
                  {product.badges.map(badge => (
                    <span key={badge} className="px-3 py-1 bg-white border border-silver/50 text-gray-500 text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-2 mb-8 flex-grow">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                      <span className="text-brand-red">{feature.icon}</span>
                      {feature.text}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link 
                  to={product.link}
                  className="inline-flex items-center justify-between px-6 py-4 bg-transparent border-2 border-dark-grey text-dark-grey font-bold uppercase tracking-wider rounded-md hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-300 group/btn"
                >
                  View Details
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="col-span-1 lg:col-span-2 text-center py-20 text-gray-500 font-medium">
              No products found matching "{searchTerm}".
            </div>
          )}
        </div>

        {/* Coming Soon Section */}
        {searchTerm === '' && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-gray-400 tracking-wide uppercase">
                Future Releases
              </h3>
              <div className="h-px bg-silver/40 flex-grow" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonProducts.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/50 border border-silver/40 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity"
                >
                  <div className="text-gray-300 mb-4">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="text-brand-red/80 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                    Coming Soon
                  </div>
                  <h4 className="text-dark-grey font-display font-bold text-lg uppercase tracking-wide">
                    {item.name}
                  </h4>
                  <span className="text-gray-400 text-sm font-medium mt-1">
                    {item.viscosity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
