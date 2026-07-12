import { SITE_CONFIG } from "@/config/constants"
import { Helmet } from "react-helmet-async"

// Sections
import { Hero } from "@/components/sections/Hero"
import { TrustStrip } from "@/components/sections/TrustStrip"
import { WhyChoose } from "@/components/sections/WhyChoose"
import { ProductOverview } from "@/components/sections/ProductOverview"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { ContactCTA } from "@/components/sections/ContactCTA"

export function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE_CONFIG.title}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <link rel="canonical" href={SITE_CONFIG.url} />
      </Helmet>
      
      <div className="flex flex-col">
        <Hero />
        <TrustStrip />
        <WhyChoose />
        <ProductOverview />
        <AboutPreview />
        <ContactCTA />
      </div>
    </>
  )
}

