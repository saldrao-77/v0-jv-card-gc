import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "JobVault for General Contractors | Contact Us",
  description: "Contact the JobVault team to learn how we can help bring order to your job site expenses.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
