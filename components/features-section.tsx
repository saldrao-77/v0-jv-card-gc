"use client"

import { useState } from "react"
import { Brain, CreditCard, Receipt, BarChart, DollarSign } from "lucide-react"

const features = [
  {
    id: "ai",
    icon: <Brain className="h-8 w-8" />,
    emoji: "🤖",
    title: "Cut Costs with AI-Powered Expense Analysis",
    description:
      "Our AI Expense Agent identifies wasteful spending patterns and helps reduce materials costs by 5-10% annually. Most GCs save $50K+ in their first year while earning 2% cashback on all purchases.",
  },
  {
    id: "cards",
    icon: <CreditCard className="h-8 w-8" />,
    emoji: "💳",
    title: "Prevent Overspending with Smart Controls",
    description:
      "Stop budget overruns before they happen. Set vendor locks, daily limits, and auto-tag expenses to job sites — eliminating unauthorized purchases and keeping your projects profitable.",
  },
  {
    id: "receipts",
    icon: <Receipt className="h-8 w-8" />,
    emoji: "🧾",
    title: "Maximize Tax Deductions with Perfect Documentation",
    description:
      "Never miss a deduction due to lost receipts. Our system captures and organizes all documentation, automatically reminding team members about missing receipts so you maintain 100% compliance for tax time.",
  },
  {
    id: "reimbursements",
    icon: <BarChart className="h-8 w-8" />,
    emoji: "📊",
    title: "Accelerate Cash Flow with Faster Requisitions",
    description:
      "Get paid faster with properly documented expenses tagged to specific job sites. Create requisitions in minutes instead of days, improving your cash flow and reducing financing costs.",
  },
  {
    id: "cashback",
    icon: <DollarSign className="h-8 w-8" />,
    emoji: "💰",
    title: "Earn 2% Cashback on All Materials",
    description:
      "Turn necessary expenses into revenue. Earn 2% cashback on every dollar spent through JobVault cards — that's $20,000 back on $1M in annual materials spending.",
  },
]

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id)

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-heading">SAVE MONEY ON EVERY JOB</h2>
        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Our platform helps general contractors reduce costs, prevent overspending, and maximize profits on every
          project.
        </p>

        <div className="grid md:grid-cols-1 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 rounded-lg cursor-pointer feature-card bg-zinc-900 hover:bg-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{feature.emoji}</span>
                <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
              </div>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
