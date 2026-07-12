import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQAccordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Calculate total questions found across all categories for empty state
  const totalQuestions = data.reduce((acc, cat) => acc + cat.questions.length, 0)

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden min-h-[500px]">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        {totalQuestions === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-bold text-dark-grey mb-2">No results found</h3>
            <p className="text-gray-500">We couldn't find any questions matching your search. Please try different keywords or contact support.</p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-12">
            {data.map((category, catIdx) => (
              category.questions.length > 0 && (
                <div key={catIdx} className="w-full">
                  <h3 className="text-2xl font-display font-black text-brand-red uppercase tracking-wide mb-6 border-b border-silver/40 pb-2">
                    {category.category}
                  </h3>
                  
                  <div className="flex flex-col gap-4">
                    {category.questions.map((faq, qIdx) => {
                      // Create a unique global index for the accordion state
                      const globalIndex = `${catIdx}-${qIdx}`
                      const isOpen = openIndex === globalIndex

                      return (
                        <motion.div 
                          key={qIdx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-red/50 shadow-[0_10px_30px_rgba(216,27,33,0.05)]' : 'border-silver/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-brand-red/30'}`}
                        >
                          <button
                            onClick={() => toggleAccordion(globalIndex)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <span className={`font-bold text-lg pr-4 transition-colors ${isOpen ? 'text-brand-red' : 'text-dark-grey'}`}>
                              {faq.q}
                            </span>
                            <ChevronDown 
                              size={24} 
                              className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red' : 'text-gray-400'}`} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                  <div className="w-full h-px bg-silver/30 mb-4" />
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
        
      </div>
    </section>
  )
}
