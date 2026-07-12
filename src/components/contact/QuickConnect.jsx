import { motion } from "framer-motion"
import { Phone, MessageCircle, Mail, Navigation } from "lucide-react"

export function QuickConnect() {
  const quickLinks = [
    {
      title: "WhatsApp",
      icon: <MessageCircle size={28} />,
      link: "https://wa.me/917975814984?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20COSMOGOLD%20lubricants.",
      color: "hover:bg-[#25D366] hover:border-[#25D366]"
    },
    {
      title: "Call Now",
      icon: <Phone size={28} />,
      link: "tel:+917975814984",
      color: "hover:bg-brand-red hover:border-brand-red"
    },
    {
      title: "Email",
      icon: <Mail size={28} />,
      link: "mailto:mrsudamabaitha@gmail.com",
      color: "hover:bg-dark-grey hover:border-dark-grey"
    },
    {
      title: "Get Directions",
      icon: <Navigation size={28} />,
      link: "https://maps.google.com/?q=Ujjain+Lohiyar,+Gayghat,+East+Champaran,+Bihar+845437",
      target: "_blank",
      color: "hover:bg-carbon hover:border-carbon"
    }
  ]

  return (
    <section className="py-24 bg-carbon border-y border-silver/10 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-wide">
            Quick Connect
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {quickLinks.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <a 
                href={item.link}
                target={item.target || "_self"}
                rel={item.target === "_blank" ? "noopener noreferrer" : ""}
                className={`flex flex-col items-center justify-center gap-4 p-8 bg-white/5 border border-silver/20 rounded-2xl text-white transition-all duration-300 group ${item.color}`}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="font-bold uppercase tracking-wide text-sm md:text-base text-center">
                  {item.title}
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
