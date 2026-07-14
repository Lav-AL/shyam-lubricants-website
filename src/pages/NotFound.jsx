import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { AlertOctagon, ArrowRight, Home } from "lucide-react"
import { SITE_CONFIG } from "@/config/constants"

export function NotFound() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-carbon flex flex-col items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | {SITE_CONFIG.name}</title>
        <meta name="description" content="The page you are looking for does not exist." />

      </Helmet>

      {/* Red Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brand-red/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6 text-brand-red">
            <AlertOctagon size={80} strokeWidth={1.5} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-4 tracking-tighter">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-widest mb-6">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">
            We couldn't find the page you were looking for. It might have been removed, renamed, or temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-md hover:bg-brand-red-dark transition-all duration-300 items-center gap-3 group"
            >
              <Home size={20} />
              Return Home
            </Link>
            
            <Link 
              to="/products"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold uppercase tracking-wider rounded-md hover:border-white/50 transition-all duration-300 items-center gap-3 group"
            >
              View Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
