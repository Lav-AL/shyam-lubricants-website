import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { SITE_CONFIG } from "@/config/constants"

// Components
import { AboutHero } from "@/components/about/AboutHero"
import { CompanyStory } from "@/components/about/CompanyStory"
import { MissionVision } from "@/components/about/MissionVision"
import { CoreValues } from "@/components/about/CoreValues"
import { WhyChooseUs } from "@/components/about/WhyChooseUs"
import { ManufacturingQuality } from "@/components/about/ManufacturingQuality"
import { CompanyGallery } from "@/components/about/CompanyGallery"
import { ProductTeaser } from "@/components/about/ProductTeaser"
import { ContactCTA } from "@/components/sections/ContactCTA"

export function AboutUs() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-carbon">
      <Helmet>
        <title>About Us | SHYAM LUBRICANTS</title>
        <meta name="description" content="Learn about SHYAM LUBRICANTS, the manufacturer of COSMOGOLD premium automotive lubricants. Committed to quality, reliability, and customer satisfaction." />
        <link rel="canonical" href={`${SITE_CONFIG.url}/about`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About SHYAM LUBRICANTS" />
        <meta property="og:description" content="Discover our journey, mission, and commitment to manufacturing premium automotive lubricants under the COSMOGOLD brand." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="About SHYAM LUBRICANTS" />
        <meta property="twitter:description" content="Discover our journey, mission, and commitment to manufacturing premium automotive lubricants." />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SHYAM LUBRICANTS",
            "brand": "COSMOGOLD",
            "description": "Manufacturer, retailer and wholesaler of premium automotive lubricants.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ujjain Lohiyar, Gayghat",
              "addressLocality": "East Champaran",
              "addressRegion": "Bihar",
              "postalCode": "845437",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7975814984",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>

      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <ManufacturingQuality />
      <ProductTeaser />
      <CompanyGallery />
      
      <div className="bg-white">
        <ContactCTA />
      </div>
    </main>
  )
}
