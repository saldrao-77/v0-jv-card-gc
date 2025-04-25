import type { Metadata } from "next"
import { PricingSection } from "@/components/pricing-section"

export const metadata: Metadata = {
  title: "JobVault | Pricing",
  description:
    "Explore JobVault's pricing plans to find the right solution for your job site expense management needs.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-36 pb-20">
      <div className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">PRICING PLANS</h1>
        <p className="text-center text-white/70 max-w-2xl mx-auto">
          JobVault offers flexible pricing options to fit the needs of general contractor businesses of all sizes.
          Choose the plan that works best for you.
        </p>
      </div>

      <PricingSection showHeader={false} />
    </main>
  )
}
