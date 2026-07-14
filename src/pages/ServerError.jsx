import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { AlertTriangle, RotateCcw, Phone } from "lucide-react"
import { SITE_CONFIG } from "@/config/constants"

export function ServerError() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <Helmet>
        <title>500 - System Error | {SITE_CONFIG.name}</title>
        <meta name="description" content="An unexpected error has occurred." />

      </Helmet>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-lg border border-silver/40"
        >
          <div className="flex justify-center mb-6 text-brand-red">
            <AlertTriangle size={70} strokeWidth={1.5} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide mb-4">
            System Error
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We are experiencing an unexpected technical issue. Our engineering team has been notified. Please try refreshing the page or contact support if the issue persists.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-dark-grey text-white font-bold uppercase tracking-wider rounded-md hover:bg-black transition-all duration-300 items-center gap-3 group"
            >
              <RotateCcw size={20} className="group-hover:-rotate-180 transition-transform duration-500" />
              Refresh Page
            </button>
            
            <a 
              href={`tel:${SITE_CONFIG.contact.phonePrimary}`}
              className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-transparent border-2 border-brand-red text-brand-red font-bold uppercase tracking-wider rounded-md hover:bg-brand-red/10 transition-all duration-300 items-center gap-3"
            >
              <Phone size={20} />
              Call Support
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
