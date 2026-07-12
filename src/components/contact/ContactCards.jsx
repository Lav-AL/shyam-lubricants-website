import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactCards() {
  const cards = [
    {
      icon: <Phone size={28} />,
      title: "Sudama Kumar",
      value: "+91 7975814984",
      link: "tel:+917975814984"
    },
    {
      icon: <Phone size={28} />,
      title: "Deepak Kumar",
      value: "+91 7892400589",
      link: "tel:+917892400589"
    },
    {
      icon: <Mail size={28} />,
      title: "Email Support",
      value: "mrsudamabaitha@gmail.com",
      link: "mailto:mrsudamabaitha@gmail.com",
      className: "md:col-span-2 lg:col-span-1" // Centered on tablet
    },
    {
      icon: <MapPin size={28} />,
      title: "Corporate Office",
      value: "Ujjain Lohiyar, Gayghat\nEast Champaran, Bihar\n845437",
      link: "https://maps.google.com/?q=Ujjain+Lohiyar,+Gayghat,+East+Champaran,+Bihar+845437",
      target: "_blank",
      className: "md:col-span-2 lg:col-span-3 xl:col-span-1" // Wide formatting handling
    }
  ]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={card.className || ""}
            >
              <a 
                href={card.link}
                target={card.target || "_self"}
                rel={card.target === "_blank" ? "noopener noreferrer" : ""}
                className="bg-white border border-silver/40 p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-red/40 transition-all duration-500 group flex flex-col h-full items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-sm relative z-10 border border-brand-red/10 group-hover:border-transparent">
                  {card.icon}
                </div>
                
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 relative z-10">
                  {card.title}
                </h4>
                
                <p className="text-lg font-bold text-dark-grey group-hover:text-brand-red transition-colors whitespace-pre-line leading-relaxed relative z-10">
                  {card.value}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
