import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone, Download, CheckCircle2, ArrowLeft } from "lucide-react"
import { Link, useSearchParams } from "react-router-dom"
import { SITE_CONFIG } from "@/config/constants"
import product20w40 from "@/assets/product-20w40.jpg"
import product20w50 from "@/assets/product-20w50.jpg"
import bottleBack from "@/assets/bottle-back.jpeg"

const productVariants = [
  {
    id: "20w40",
    viscosity: "20W-40",
    volume: "900ml",
    image: product20w40,
    tagline: "Maximum Fuel Saving & Smooth Clutch",
    description: "Engineered with advanced synthetic technology for modern high-performance motorcycles. Delivers exceptional thermal stability, superior wear protection, and optimized clutch performance under extreme riding conditions."
  },
  {
    id: "20w50",
    viscosity: "20W-50",
    volume: "1 Ltr",
    image: product20w50,
    tagline: "Heavy-Duty Thermal & Shear Protection",
    description: "Specially formulated for high-temperature operating conditions and heavy engine loads. Provides robust viscosity retention, maximum cylinder lubrication, and enhanced engine protection for long journeys."
  }
]

export function ProductHero() {
  const [searchParams] = useSearchParams()
  const initialVariant = searchParams.get("variant") === "20w50" ? 1 : 0
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(initialVariant)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (searchParams.get("variant") === "20w50") {
      setSelectedVariantIdx(1)
    } else if (searchParams.get("variant") === "20w40") {
      setSelectedVariantIdx(0)
    }
  }, [searchParams])

  const currentVariant = productVariants[selectedVariantIdx]
  const images = [currentVariant.image, bottleBack]

  const message = encodeURIComponent(`Hello! I want to inquire about COSMOGOLD SYNTH-TEC 4T ${currentVariant.viscosity} (${currentVariant.volume}).`)
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.phonePrimary.replace(/[^0-9]/g, '')}?text=${message}`
  const callUrl = `tel:${SITE_CONFIG.contact.phonePrimary.replace(/[^0-9+]/g, '')}`

  const handleDownload = (e) => {
    e.preventDefault()
    alert("Brochure download is coming soon!")
  }

  // Swipe handlers for mobile
  const handleDragEnd = (e, { offset, velocity: _velocity }) => {
    const swipe = offset.x
    if (swipe < -50) {
      setActiveImage(1)
    } else if (swipe > 50) {
      setActiveImage(0)
    }
  }

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-carbon relative overflow-hidden">
      {/* Soft Red Glow Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-red/10 rounded-full blur-[120px] opacity-70" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col items-center w-full max-w-md mx-auto lg:mx-0">
            {/* Back to Products Navigation */}
            <div className="w-full flex justify-start mb-6 lg:hidden">
              <Link to="/products" className="text-white/60 hover:text-brand-red flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors">
                <ArrowLeft size={16} />
                Back to Catalog
              </Link>
            </div>
            {/* Main Image Area with Swipe */}
            <div className="relative w-full aspect-[4/5] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4 mb-4 overflow-hidden group cursor-grab active:cursor-grabbing">
              <div className="absolute bottom-10 w-3/4 h-6 bg-black/60 blur-[12px] rounded-[100%]" />
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={images[activeImage]}
                  alt={`COSMOGOLD SYNTH-TEC 4T - View ${activeImage + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="relative z-10 w-auto h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.15] transition-transform duration-500 ease-out origin-center"
                  loading={activeImage === 0 ? "eager" : "lazy"}
                  fetchpriority={activeImage === 0 ? "high" : "auto"}
                />
              </AnimatePresence>

              {/* Mobile Swipe Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase lg:hidden pointer-events-none">
                Swipe to rotate
              </div>
            </div>

            {/* Thumbnail Selector */}
            <div className="flex gap-4 justify-center w-full">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-16 h-20 rounded-lg border-2 overflow-hidden transition-all duration-300 bg-white/5 p-2 ${
                    activeImage === idx ? 'border-brand-red shadow-[0_0_15px_rgba(216,27,33,0.3)]' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-contain" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:pl-4"
          >
            {/* Desktop Back Link */}
            <div className="hidden lg:flex justify-start mb-6">
              <Link to="/products" className="text-white/60 hover:text-brand-red flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors">
                <ArrowLeft size={16} />
                Back to Catalog
              </Link>
            </div>

            {/* Variant Switcher Pills */}
            <div className="flex items-center gap-3 mb-6">
              {productVariants.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedVariantIdx(idx)
                    setActiveImage(0)
                  }}
                  className={`px-5 py-2 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedVariantIdx === idx 
                      ? "bg-brand-red text-white shadow-[0_4px_15px_rgba(216,27,33,0.4)]" 
                      : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10"
                  }`}
                >
                  {v.viscosity} ({v.volume})
                </button>
              ))}
            </div>

            <div className="inline-block px-4 py-1.5 mb-4 border border-silver/30 rounded-full bg-white/5 text-silver font-medium text-xs md:text-sm tracking-[0.2em] uppercase w-fit">
              Premium 4 Stroke Engine Oil
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 tracking-tight leading-tight">
              COSMOGOLD <br className="hidden md:block" />
              <span className="text-brand-red drop-shadow-[0_4px_12px_rgba(216,27,33,0.25)]">SYNTH-TEC 4T</span>
            </h1>

            {/* Premium Specification Badges - Immediately Below Title */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-brand-red text-white text-sm font-bold tracking-widest uppercase rounded shadow-sm">
                {currentVariant.viscosity}
              </span>
              <span className="px-3 py-1.5 bg-white/10 text-white border border-white/20 text-xs md:text-sm font-bold tracking-widest uppercase rounded hover:bg-white/20 transition-colors cursor-default">
                API SN
              </span>
              <span className="px-3 py-1.5 bg-white/10 text-white border border-white/20 text-xs md:text-sm font-bold tracking-widest uppercase rounded hover:bg-white/20 transition-colors cursor-default">
                JASO MA2
              </span>
              <span className="px-3 py-1.5 bg-white/10 text-white border border-white/20 text-xs md:text-sm font-bold tracking-widest uppercase rounded hover:bg-white/20 transition-colors cursor-default">
                BS-VI
              </span>
              <span className="px-3 py-1.5 bg-silver/20 text-silver border border-silver/30 text-xs md:text-sm font-bold tracking-widest uppercase rounded">
                {currentVariant.volume}
              </span>
            </div>

            <p className="text-base md:text-lg text-white/80 mb-8 font-light leading-relaxed max-w-xl min-h-[70px]">
              {currentVariant.description}
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl">
              <div className="flex items-center gap-3 border border-brand-red/20 rounded-lg p-3 md:p-4 bg-brand-red/10 backdrop-blur-sm">
                <CheckCircle2 size={20} className="text-brand-red shrink-0" />
                <span className="text-white font-bold text-xs md:text-sm tracking-wide uppercase">Maximum Protection</span>
              </div>
              <div className="flex items-center gap-3 border border-brand-red/20 rounded-lg p-3 md:p-4 bg-brand-red/10 backdrop-blur-sm">
                <CheckCircle2 size={20} className="text-brand-red shrink-0" />
                <span className="text-white font-bold text-xs md:text-sm tracking-wide uppercase">Fuel Saving</span>
              </div>
              <div className="flex items-center gap-3 border border-white/10 rounded-lg p-3 md:p-4 bg-white/5 backdrop-blur-sm">
                <CheckCircle2 size={20} className="text-brand-red shrink-0" />
                <span className="text-white font-bold text-xs md:text-sm tracking-wide uppercase">Export Quality</span>
              </div>
              <div className="flex items-center gap-3 border border-white/10 rounded-lg p-3 md:p-4 bg-white/5 backdrop-blur-sm">
                <CheckCircle2 size={20} className="text-brand-red shrink-0" />
                <span className="text-white font-bold text-xs md:text-sm tracking-wide uppercase">Thermal Stability</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 max-w-xl">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3.5 bg-brand-red text-white font-bold uppercase tracking-wider text-sm rounded-md hover:bg-brand-red-dark transition-all duration-300 shadow-[0_8px_25px_rgba(216,27,33,0.35)] flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              <a 
                href={callUrl}
                className="flex-1 px-5 py-3.5 bg-transparent border-2 border-white/20 text-white/90 font-bold uppercase tracking-wider text-sm rounded-md hover:border-silver hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                Call Dealer
              </a>
              <button 
                onClick={handleDownload}
                className="w-full sm:w-auto px-5 py-3.5 bg-transparent border-2 border-silver/20 text-silver font-bold uppercase tracking-wider text-sm rounded-md hover:border-silver hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group mt-1 sm:mt-0"
              >
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Brochure
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
