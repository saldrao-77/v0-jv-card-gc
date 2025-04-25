import type { Metadata } from "next"
import GetStartedClientPage from "./GetStartedClientPage"

export const metadata: Metadata = {
  title: "JobVault for General Contractors | Get Started",
  description: "Get started with JobVault and bring order to your job site expenses today.",
}

export default function GetStartedPage() {
  return <GetStartedClientPage />
}
