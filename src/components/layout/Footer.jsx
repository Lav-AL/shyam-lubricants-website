import { SITE_CONFIG } from "@/config/constants"
import { Phone, Mail, MapPin } from "lucide-react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-slate pt-20 pb-10 border-t border-silver/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="font-display font-black text-2xl text-white mb-6 tracking-wider">
              COSMOGOLD
            </div>
            <p className="text-silver mb-8 leading-relaxed">
              Maximum Protection. Export Quality. The official premium automotive lubricant by SHYAM LUBRICANTS.
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.social.facebook} aria-label="Visit our Facebook page" className="w-10 h-10 rounded-full bg-carbon flex items-center justify-center text-silver hover:bg-brand-red hover:text-white transition-all"><FaFacebook size={20} aria-hidden="true" /></a>
              <a href={SITE_CONFIG.social.instagram} aria-label="Visit our Instagram page" className="w-10 h-10 rounded-full bg-carbon flex items-center justify-center text-silver hover:bg-brand-red hover:text-white transition-all"><FaInstagram size={20} aria-hidden="true" /></a>
              <a href={SITE_CONFIG.social.twitter} aria-label="Visit our Twitter page" className="w-10 h-10 rounded-full bg-carbon flex items-center justify-center text-silver hover:bg-brand-red hover:text-white transition-all"><FaTwitter size={20} aria-hidden="true" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-silver hover:text-brand-red transition-colors font-medium">Home</Link></li>
              <li><Link to="/products" className="text-silver hover:text-brand-red transition-colors font-medium">Products</Link></li>
              <li><Link to="/about" className="text-silver hover:text-brand-red transition-colors font-medium">Company</Link></li>
              <li><Link to="/contact" className="text-silver hover:text-brand-red transition-colors font-medium">Contact</Link></li>
              <li><Link to="/faq" className="text-silver hover:text-brand-red transition-colors font-medium">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Col 1 */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-silver leading-relaxed">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-red shrink-0" size={20} />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-silver hover:text-white transition-colors">{SITE_CONFIG.contact.email}</a>
              </li>
            </ul>
          </div>

          {/* Contact Col 2 */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wide">Sales & Support</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={20} />
                <div>
                  <div className="text-silver hover:text-white transition-colors">{SITE_CONFIG.contact.phonePrimary}</div>
                  <div className="text-silver hover:text-white transition-colors">{SITE_CONFIG.contact.phoneSecondary}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-silver/80">
          <p>© {new Date().getFullYear()} SHYAM LUBRICANTS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
