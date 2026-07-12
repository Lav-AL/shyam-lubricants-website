import { motion } from "framer-motion"
import { AlertTriangle, Archive, Info } from "lucide-react"

export function ProductInstructions() {
  const instructions = [
    {
      id: "how-to-use",
      title: "How To Use",
      icon: <Info size={24} className="text-white" />,
      points: [
        "Ensure the engine is completely cool before draining old oil.",
        "Remove the drain plug and allow all old oil to exit.",
        "Replace the oil filter if recommended by your vehicle manufacturer.",
        "Pour in 900ml of COSMOGOLD SYNTH-TEC 4T 20W40.",
        "Check the dipstick to ensure oil is at the optimal level.",
        "Dispose of used oil responsibly at a recycling center."
      ],
      bgClass: "bg-white border-silver/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-red/30 transition-all duration-500"
    },
    {
      id: "storage",
      title: "Storage Instructions",
      icon: <Archive size={24} className="text-white" />,
      points: [
        "Store in a cool, dry, and well-ventilated area.",
        "Keep away from direct sunlight and extreme temperatures.",
        "Ensure the cap is tightly sealed to prevent contamination.",
        "Keep out of reach of children and pets."
      ],
      bgClass: "bg-white border-silver/40 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-red/30 transition-all duration-500"
    },
    {
      id: "safety",
      title: "Safety Instructions",
      icon: <AlertTriangle size={24} className="text-white" />,
      points: [
        "Avoid prolonged or repeated skin contact with used engine oil.",
        "Wash thoroughly with soap and water after handling.",
        "Do not induce vomiting if swallowed; seek medical advice immediately.",
        "In case of eye contact, rinse thoroughly with water."
      ],
      bgClass: "bg-white border-brand-red/20 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(216,27,33,0.1)] hover:-translate-y-2 hover:border-brand-red/50 transition-all duration-500"
    }
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-silver/40">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
            Usage & Safety Guide
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructions.map((block, idx) => (
            <motion.div 
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`p-10 rounded-3xl border ${block.bgClass} flex flex-col h-full group`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 ${block.id === 'safety' ? 'bg-brand-red' : 'bg-dark-grey'}`}>
                  {block.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-dark-grey uppercase tracking-wider">
                  {block.title}
                </h3>
              </div>
              
              <ul className="space-y-4 flex-grow">
                {block.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${block.id === 'safety' ? 'bg-brand-red' : 'bg-gray-400'}`} />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
