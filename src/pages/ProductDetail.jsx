import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { SITE_CONFIG } from "@/config/constants"

// Components
import { ProductHero } from "@/components/product/ProductHero"
import { TechnicalSpecs } from "@/components/product/TechnicalSpecs"
import { ProductBenefits } from "@/components/product/ProductBenefits"
import { ProductInstructions } from "@/components/product/ProductInstructions"
import { ProductFAQ } from "@/components/product/ProductFAQ"
import { RelatedProducts } from "@/components/product/RelatedProducts"
import { ContactCTA } from "@/components/sections/ContactCTA"

export function ProductDetail() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>SYNTH-TEC 4T 20W-40 & 20W-50 | {SITE_CONFIG.title}</title>
        <meta name="description" content="COSMOGOLD SYNTH-TEC 4T 20W-40 and 20W-50 premium export-quality 4-stroke engine oils offering maximum protection, fuel saving, and superior lubrication." />
        <link rel="canonical" href={`${SITE_CONFIG.url}/product`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="COSMOGOLD SYNTH-TEC 4T 20W-40 & 20W-50" />
        <meta property="og:description" content="Premium 4-stroke engine oil designed for extreme performance. API SN, JASO MA2, BS-VI compatible." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="COSMOGOLD SYNTH-TEC 4T 20W-40 & 20W-50" />
        <meta property="twitter:description" content="Premium 4-stroke engine oil designed for extreme performance." />
      </Helmet>

      <main className="bg-carbon min-h-screen">
        <ProductHero />
        <TechnicalSpecs />
        <ProductBenefits />
        <ProductInstructions />
        <ProductFAQ />
        <RelatedProducts />
        <ContactCTA />
      </main>
    </>
  )
}
