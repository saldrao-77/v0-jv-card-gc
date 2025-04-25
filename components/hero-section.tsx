"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building, CreditCard, Receipt } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      router.push(`/get-started?email=${encodeURIComponent(email)}`)
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 bg-black">
      {/* Background image only for desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/PM.webp"
          alt="Property Management"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto font-heading tracking-tight">
          Bring Order to Job Site Expenses
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Cut costs by 15% with our expense cards that prevent overspending, eliminate receipt chasing, and maximize tax
          deductions.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-white text-black hover:bg-white/90 whitespace-nowrap font-medium">
              Get started today
            </Button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Building className="h-4 w-4 text-blue-400" />
            Saves GCs $50K+ annually
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-blue-400" />
            2% cashback on all purchases
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <Receipt className="h-4 w-4 text-blue-400" />
            100% receipt compliance
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </section>
  )
}
