import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-carbon text-white">
      <Header />
      <main className="flex-1 w-full overflow-hidden">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}

