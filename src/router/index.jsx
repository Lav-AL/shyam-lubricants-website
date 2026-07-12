/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import { Layout } from "@/components/layout/Layout"
import { ServerError } from "@/pages/ServerError"

// Lazy-loaded pages
const Home = lazy(() => import("@/pages/Home").then(m => ({ default: m.Home })))
const ProductDetail = lazy(() => import("@/pages/ProductDetail").then(m => ({ default: m.ProductDetail })))
const ProductsCatalog = lazy(() => import("@/pages/ProductsCatalog").then(m => ({ default: m.ProductsCatalog })))
const AboutUs = lazy(() => import("@/pages/AboutUs").then(m => ({ default: m.AboutUs })))
const ContactUs = lazy(() => import("@/pages/ContactUs").then(m => ({ default: m.ContactUs })))
const FAQ = lazy(() => import("@/pages/FAQ").then(m => ({ default: m.FAQ })))
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })))
const TermsConditions = lazy(() => import("@/pages/TermsConditions").then(m => ({ default: m.TermsConditions })))
const NotFound = lazy(() => import("@/pages/NotFound").then(m => ({ default: m.NotFound })))

// Suspense wrapper
const Loadable = (Component) => (props) => (
  <Suspense fallback={<div className="min-h-screen bg-carbon" />}>
    <Component {...props} />
  </Suspense>
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ServerError />,
    children: [
      { index: true, element: Loadable(Home)({}) },
      { path: "products", element: Loadable(ProductsCatalog)({}) },
      { path: "product", element: Loadable(ProductDetail)({}) },
      { path: "about", element: Loadable(AboutUs)({}) },
      { path: "contact", element: Loadable(ContactUs)({}) },
      { path: "faq", element: Loadable(FAQ)({}) },
      { path: "privacy", element: Loadable(PrivacyPolicy)({}) },
      { path: "terms", element: Loadable(TermsConditions)({}) },
      { path: "*", element: Loadable(NotFound)({}) }
    ]
  }
])
