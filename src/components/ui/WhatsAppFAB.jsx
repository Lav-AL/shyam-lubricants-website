import { FaWhatsapp } from "react-icons/fa"
import { SITE_CONFIG } from "@/config/constants"

export function WhatsAppFAB() {
  const message = encodeURIComponent("Hi, I'm interested in COSMOGOLD lubricants.")
  const url = `https://wa.me/${SITE_CONFIG.contact.phonePrimary.replace(/[^0-9]/g, '')}?text=${message}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  )
}
