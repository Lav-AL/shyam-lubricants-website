import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export function ProductFAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      q: "Is COSMOGOLD SYNTH-TEC 4T compatible with older motorcycle engines?",
      a: "Yes, our 20W40 viscosity grade is highly compatible with both modern and older 4-stroke motorcycle engines. It provides excellent sealing and wear protection, which is particularly beneficial for older engines."
    },
    {
      q: "What makes this 'Export Quality'?",
      a: "COSMOGOLD is manufactured using highly refined base oils and advanced synthetic additives that meet or exceed international standards like API SN and JASO MA2, ensuring it performs flawlessly in various global climates."
    },
    {
      q: "How does this oil affect clutch performance?",
      a: "The JASO MA2 certification guarantees optimal friction characteristics. This prevents clutch slippage under high torque conditions, ensuring smooth and responsive gear shifts."
    },
    {
      q: "What is the recommended drain interval?",
      a: "While COSMOGOLD SYNTH-TEC 4T offers extended drain intervals due to its synthetic technology, we always recommend following your vehicle manufacturer's specific guidelines for oil change frequencies."
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section className="py-24 bg-gray-50 relative border-b border-silver/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-silver/40 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-brand-red/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <span className={`font-bold text-lg md:text-xl pr-8 transition-colors ${activeIndex === index ? 'text-brand-red' : 'text-dark-grey group-hover:text-brand-red'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-brand-red/10 group-hover:text-brand-red'}`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed border-t border-silver/30 mx-6 mt-2 pb-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
