import type { Metadata } from "next"
import CalendarPageClient from "./CalendarPageClient"

export const metadata: Metadata = {
  title: "JobVault | Book a Demo",
  description: "Schedule a personalized demo to see how JobVault can help bring order to your job site expenses.",
}

export default function CalendarPage() {
  return <CalendarPageClient />
}
