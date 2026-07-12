import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { CatalogHero } from "@/components/catalog/CatalogHero"
import { CatalogSearch } from "@/components/catalog/CatalogSearch"
import { ProductGrid } from "@/components/catalog/ProductGrid"
import { CatalogFeatures } from "@/components/catalog/CatalogFeatures"
import { ContactCTA } from "@/components/sections/ContactCTA"

import { SITE_CONFIG } from "@/config/constants"

export function ProductsCatalog() {
  const [searchTerm, setSearchTerm] = useState("")

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-carbon">
      <Helmet>
        <title>Products | COSMOGOLD Premium Lubricants</title>
        <meta name="description" content="Explore the COSMOGOLD catalog of premium automotive lubricants. Engineered for maximum protection, fuel efficiency, and performance." />
        <link rel="canonical" href={`${SITE_CONFIG.url}/products`} />
        <meta property="og:title" content="Products | COSMOGOLD Premium Lubricants" />
        <meta property="og:description" content="Explore the COSMOGOLD catalog of premium automotive lubricants. Engineered for maximum protection, fuel efficiency, and performance." />
        <meta property="og:type" content="website" />
      </Helmet>

      <CatalogHero />
      <CatalogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductGrid searchTerm={searchTerm} />
      <CatalogFeatures />
      
      {/* Ensure ContactCTA has a solid background to match transitions if needed, but it already handles its own */}
      <div className="bg-white">
        <ContactCTA />
      </div>
    </main>
  )
}
