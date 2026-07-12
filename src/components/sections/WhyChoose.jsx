import { motion } from "framer-motion"
import { ShieldCheck, Droplets, Clock, ThermometerSun, Gauge, ThumbsUp } from "lucide-react"

export function WhyChoose() {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Maximum Protection",
      desc: "Advanced additives defend against wear, tear, and corrosion, extending engine life under extreme conditions."
    },
    {
      icon: <Droplets size={32} />,
      title: "Maximum Fuel Saving",
      desc: "Optimized synthetic viscosity reduces friction to maximize every single drop of fuel you put in your tank."
    },
    {
      icon: <Clock size={32} />,
      title: "Long Engine Life",
      desc: "Cleans deposits and prevents sludge buildup, ensuring your engine runs like new for years to come."
    },
    {
      icon: <ThermometerSun size={32} />,
      title: "Heat Resistance",
      desc: "Maintains optimal oil thickness even at peak operating temperatures, preventing thermal breakdown."
    },
    {
      icon: <Gauge size={32} />,
      title: "Smooth Engine Performance",
      desc: "Reduces engine noise and vibrations, providing a buttery-smooth riding experience."
    },
    {
      icon: <ThumbsUp size={32} />,
      title: "Superior Lubrication",
      desc: "Instant lubrication during cold starts, preventing the most common cause of engine wear."
    }
  ]

  return (
    <section className="py-24 bg-gray-50 border-b border-silver/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-dark-grey mb-4">
            WHY CHOOSE <span className="text-brand-red">COSMOGOLD?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Engineered for premium performance, designed for longevity. Discover the definitive advantages of switching to our SYNTH-TEC formula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white border border-silver/40 p-10 rounded-3xl hover:border-brand-red/50 transition-all duration-500 group shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-grey mb-3 font-display tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
