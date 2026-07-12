import { motion } from "framer-motion"
import { HelpCircle, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export function FAQPreview() {
  const faqs = [
    {
      q: "How can I become a dealer?",
      a: "You can apply for dealership by filling out the contact form on this page and selecting 'Dealer Inquiry', or by messaging us directly on WhatsApp."
    },
    {
      q: "Where can I buy COSMOGOLD products?",
      a: "Our products are available through our authorized dealer network across Bihar and surrounding regions. Contact us to find a dealer near you."
    },
    {
      q: "Do your products meet API standards?",
      a: "Yes, our flagship SYNTH-TEC 4T meets API SN and JASO MA2 specifications, ensuring premium protection for modern engines."
    }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4 text-brand-red">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
            Common Questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-3xl border border-silver/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-red/30 transition-all duration-500 group"
            >
              <h4 className="text-lg font-bold text-dark-grey mb-3">
                {faq.q}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/faq"
            className="inline-flex px-8 py-3 bg-transparent border-2 border-dark-grey text-dark-grey font-bold uppercase tracking-wider rounded-md hover:bg-dark-grey hover:text-white transition-all duration-300 items-center gap-3 group"
          >
            View All FAQs
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
