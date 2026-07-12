import { motion } from "framer-motion"

export function CompanyStory() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide mb-6">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed"
          >
            <p>
              SHYAM LUBRICANTS was established with a singular focus: to engineer and supply premium-grade automotive lubricants that meet the evolving demands of modern high-performance engines. 
            </p>
            <p>
              Operating as a dedicated manufacturer, retailer, and wholesaler, we have built a robust supply chain that ensures our products maintain uncompromising quality from our facility to your engine. We understand that every drop of oil plays a critical role in vehicular longevity.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed"
          >
            <p>
              The introduction of our flagship brand, <strong>COSMOGOLD</strong>, represents our commitment to excellence. By utilizing advanced synthetic technology and adhering to stringent international standards, we deliver products that offer superior thermal stability and wear protection.
            </p>
            <p>
              Our dedication to customer satisfaction is absolute. We partner closely with mechanics, dealers, and everyday riders to continuously refine our formulations, ensuring reliable performance across all driving conditions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
