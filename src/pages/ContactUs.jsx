import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { SITE_CONFIG } from "@/config/constants"

// Components
import { ContactHero } from "@/components/contact/ContactHero"
import { QuickConnect } from "@/components/contact/QuickConnect"
import { ContactCards } from "@/components/contact/ContactCards"
import { ContactForm } from "@/components/contact/ContactForm"
import { LocationMap } from "@/components/contact/LocationMap"
import { BusinessHours } from "@/components/contact/BusinessHours"
import { DealerInvite } from "@/components/contact/DealerInvite"
import { FAQPreview } from "@/components/contact/FAQPreview"
import { SocialMedia } from "@/components/contact/SocialMedia"

export function ContactUs() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-carbon flex flex-col">
      <Helmet>
        <title>Contact Us | SHYAM LUBRICANTS</title>
        <meta name="description" content="Get in touch with SHYAM LUBRICANTS for product enquiries, dealership opportunities, and customer support. Call +91 7975814984." />
        <link rel="canonical" href={`${SITE_CONFIG.url}/contact`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact SHYAM LUBRICANTS" />
        <meta property="og:description" content="Reach out to us for automotive lubricants, distributor inquiries, and general support." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact SHYAM LUBRICANTS" />
        <meta property="twitter:description" content="Reach out to us for automotive lubricants, distributor inquiries, and general support." />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SHYAM LUBRICANTS",
            "image": "https://example.com/logo.png", // Placeholder
            "@id": "https://example.com",
            "url": "https://example.com",
            "telephone": "+91-7975814984",
            "email": "mrsudamabaitha@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ujjain Lohiyar, Gayghat",
              "addressLocality": "East Champaran",
              "addressRegion": "Bihar",
              "postalCode": "845437",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.6468, // Placeholder
              "longitude": 84.9089 // Placeholder
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </script>
      </Helmet>

      <ContactHero />
      <QuickConnect />
      <ContactCards />
      <ContactForm />
      <LocationMap />
      <BusinessHours />
      <DealerInvite />
      <FAQPreview />
      <SocialMedia />
      
    </main>
  )
}
