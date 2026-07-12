import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"

export function SocialMedia() {
  const socials = [
    { name: "Facebook", icon: <FaFacebookF size={20} />, link: "#", color: "hover:bg-[#1877F2]" },
    { name: "Instagram", icon: <FaInstagram size={22} />, link: "#", color: "hover:bg-[#E4405F]" },
    { name: "LinkedIn", icon: <FaLinkedinIn size={20} />, link: "#", color: "hover:bg-[#0A66C2]" },
    { name: "YouTube", icon: <FaYoutube size={22} />, link: "#", color: "hover:bg-[#FF0000]" }
  ]

  return (
    <section className="py-16 bg-white relative overflow-hidden border-b border-silver/40">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-black text-dark-grey uppercase tracking-wide">
              Connect With Us
            </h3>
            <p className="text-gray-500 font-medium">Follow us for updates, announcements, and more.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.link}
                className={`w-14 h-14 bg-gray-50 border border-silver/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
