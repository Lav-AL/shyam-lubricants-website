import { Link } from "react-router-dom"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-carbon/95 backdrop-blur-md border-b border-silver/10 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="font-display font-black text-2xl tracking-wider text-brand-red hover:text-white transition-colors duration-300">
            COSMOGOLD
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          <Link to="/" className="text-white hover:text-brand-red transition-colors">Home</Link>
          <Link to="/products" className="text-white hover:text-brand-red transition-colors">Products</Link>
          <Link to="/about" className="text-white hover:text-brand-red transition-colors">Company</Link>
          <Link to="/contact" className="text-white hover:text-brand-red transition-colors">Contact</Link>
          <Link 
            to="/contact"
            className="px-6 py-2.5 bg-brand-red text-white rounded-sm hover:bg-white hover:text-brand-red transition-all font-bold uppercase tracking-wide text-xs"
          >
            Inquire Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-carbon/98 backdrop-blur-xl border-b border-silver/10 flex flex-col items-center py-8 gap-6 shadow-2xl"
        >
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-brand-red">Home</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-brand-red">Products</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-brand-red">Company</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-brand-red">Contact</Link>
          <Link 
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 mt-4 bg-brand-red text-white rounded-sm hover:bg-white hover:text-brand-red transition-all font-bold uppercase tracking-wide"
          >
            Inquire Now
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}
