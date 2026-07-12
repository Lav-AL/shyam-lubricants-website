import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { SITE_CONFIG } from "@/config/constants"

export function TermsConditions() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-32 pb-24">
      <Helmet>
        <title>Terms & Conditions | SHYAM LUBRICANTS</title>
        <meta name="description" content="Please read these terms carefully before using the SHYAM LUBRICANTS website or purchasing COSMOGOLD products." />
        <link rel="canonical" href={`${SITE_CONFIG.url}/terms`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | SHYAM LUBRICANTS" />
        <meta property="og:description" content="Please read these terms carefully before using the SHYAM LUBRICANTS website." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Terms & Conditions | SHYAM LUBRICANTS" />
        <meta property="twitter:description" content="Please read these terms carefully before using the SHYAM LUBRICANTS website." />
      </Helmet>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-silver/40"
        >
          <div className="flex items-center gap-4 mb-4 text-brand-red">
            <FileText size={40} />
            <h1 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
              Terms & Conditions
            </h1>
          </div>
          
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Please read these terms carefully before using the SHYAM LUBRICANTS website.
          </p>
          
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12 border-b border-silver/40 pb-6">
            Last Updated: {currentDate}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-dark-grey prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-red hover:prose-a:text-brand-red-dark prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 space-y-12 divide-y divide-silver/20">
            
            <section className="pt-8 first:pt-0">
              <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the SHYAM LUBRICANTS website (the "Site"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you must not use our website or purchase our products.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">2. Website Usage</h2>
              <p>
                The content on this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">3. Product Information</h2>
              <p>
                We strive to provide accurate representations of our products, including COSMOGOLD lubricants. However, we do not warrant that product descriptions, specifications, or other content on the site are entirely accurate, complete, reliable, current, or error-free. Packaging and formulation are subject to continuous improvement.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">4. Pricing & Availability Disclaimer</h2>
              <p>
                All prices, if displayed, are subject to change without notice. We reserve the right to modify or discontinue any product or service without prior notice. We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of products. Dealership pricing and wholesale orders are strictly subject to individual agreements.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">5. Intellectual Property</h2>
              <p>
                This website contains material which is owned by or licensed to SHYAM LUBRICANTS. This material includes, but is not limited to, the design, layout, look, appearance, trademarks (including COSMOGOLD), and graphics. Reproduction is strictly prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">6. User Responsibilities</h2>
              <p>
                You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">7. Third-Party Links</h2>
              <p>
                From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">8. Disclaimer</h2>
              <p>
                The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">9. Limitation of Liability</h2>
              <p>
                In no event will SHYAM LUBRICANTS be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">10. Governing Law</h2>
              <p>
                Your use of this website and any dispute arising out of such use of the website is subject to the local laws of India, specifically within the jurisdiction of Bihar courts, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to revise these terms at any time without prior notice. By using this website, you agree to be bound by the then-current version of these Terms and Conditions. It is your responsibility to review these Terms periodically.
              </p>
            </section>

            <section className="pt-8">
              <h2 className="text-2xl mb-4">12. Contact Information</h2>
              <p>
                If you have any questions or concerns regarding these Terms & Conditions, please contact our administrative team:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:mrsudamabaitha@gmail.com">mrsudamabaitha@gmail.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+917975814984">+91 7975814984</a></li>
                <li><strong>Address:</strong> Ujjain Lohiyar, Gayghat, East Champaran, Bihar - 845437</li>
              </ul>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  )
}
