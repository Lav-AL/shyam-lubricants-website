import { useState, useMemo, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { SITE_CONFIG } from "@/config/constants"

// Data
import { faqData } from "@/data/faqData"

// Components
import { FAQHero } from "@/components/faq/FAQHero"
import { FAQAccordion } from "@/components/faq/FAQAccordion"
import { FAQContactCTA } from "@/components/faq/FAQContactCTA"

export function FAQ() {
  const [searchTerm, setSearchTerm] = useState("")

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filter FAQ data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return faqData

    const lowerCaseSearch = searchTerm.toLowerCase()
    
    return faqData.map(category => {
      const filteredQuestions = category.questions.filter(
        item => item.q.toLowerCase().includes(lowerCaseSearch) || item.a.toLowerCase().includes(lowerCaseSearch)
      )
      return {
        ...category,
        questions: filteredQuestions
      }
    }).filter(category => category.questions.length > 0)
  }, [searchTerm])

  // Generate dynamic JSON-LD Schema from faqData
  const generateFAQSchema = () => {
    const mainEntity = faqData.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    )

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    }
  }

  return (
    <main className="min-h-screen bg-carbon flex flex-col">
      <Helmet>
        <title>FAQ - Frequently Asked Questions | SHYAM LUBRICANTS</title>
        <meta name="description" content="Find answers to common questions about COSMOGOLD products, engine oil usage, dealership opportunities, and customer support." />
        <link rel="canonical" href={`${SITE_CONFIG.url}/faq`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FAQ | SHYAM LUBRICANTS" />
        <meta property="og:description" content="Get fast answers regarding our premium automotive lubricants and wholesale distribution network." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="FAQ | SHYAM LUBRICANTS" />
        <meta property="twitter:description" content="Get fast answers regarding our premium automotive lubricants and wholesale distribution network." />

        {/* Dynamic FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      </Helmet>

      <FAQHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FAQAccordion data={filteredData} />
      <FAQContactCTA />
      
    </main>
  )
}
