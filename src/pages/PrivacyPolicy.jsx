import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { SITE_CONFIG } from "@/config/constants"

export function PrivacyPolicy() {
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
        <title>Privacy Policy | SHYAM LUBRICANTS</title>
        <meta name="description" content="Privacy Policy for SHYAM LUBRICANTS. Learn how we collect, use, and protect your information." />
        <link rel="canonical" href={`${SITE_CONFIG.url}/privacy`} />
      </Helmet>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-silver/40"
        >
          <div className="flex items-center gap-4 mb-8 text-brand-red">
            <ShieldCheck size={40} />
            <h1 className="text-3xl md:text-5xl font-display font-black text-dark-grey uppercase tracking-wide">
              Privacy Policy
            </h1>
          </div>
          
          <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12 border-b border-silver/40 pb-6">
            Last Updated: {currentDate}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-dark-grey prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-red hover:prose-a:text-brand-red-dark prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 space-y-12">
            
            <section>
              <h2 className="text-2xl mb-4">1. Introduction</h2>
              <p>
                Welcome to SHYAM LUBRICANTS ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              <p>
                By using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">2. Information We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">3. How We Use Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To process and deliver your orders or respond to dealership inquiries.</li>
                <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</li>
                <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">4. Cookies</h2>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. We use cookies primarily for tracking website performance and ensuring a seamless user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">5. Third-Party Services</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">6. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">7. User Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">8. Policy Updates</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
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
