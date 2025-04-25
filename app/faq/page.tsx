import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "JobVault for General Contractors | FAQ",
  description: "Find answers to frequently asked questions about JobVault's job site expense management platform.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-center text-white/70 mb-6 max-w-2xl mx-auto">
          Everything you need to know about JobVault and how it can transform your construction expense tracking.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <a
            href="tel:+12625018982"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call Us
          </a>
          <a
            href="sms:+12625018982"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Text Us
          </a>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-2" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How quickly can we get started?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Most customers are up and running within 48 hours. We'll help you set up your account, create your first
                cards, and train your team on receipt capture. Our onboarding specialists will guide you through the
                entire process, including importing your job site data and setting up user permissions. We also provide
                comprehensive training materials and live support sessions to ensure your team feels confident using the
                platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How secure is my financial data?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                We take security seriously. JobVault uses bank-level encryption, is SOC 2 compliant, and never stores
                sensitive payment information on our servers. All transactions are processed through our secure payment
                partners. We implement multi-factor authentication, regular security audits, and maintain strict data
                access controls. Your data is backed up regularly and stored in redundant, geographically distributed
                data centers to ensure business continuity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">
                Can I integrate with my accounting software?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Absolutely. JobVault integrates seamlessly with popular accounting software like QuickBooks, Xero,
                Procore, and BuilderTrend, allowing for automatic syncing of financial data and simplified bookkeeping.
                Our API also supports custom integrations with other construction management systems. We provide
                detailed documentation and integration support to ensure your data flows smoothly between systems,
                eliminating double-entry and reducing reconciliation time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">Is there a mobile app available?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Yes, JobVault offers mobile apps for both iOS and Android devices. Property managers can issue cards,
                approve transactions, and view spending analytics on the go. Team members can capture receipts directly
                through the app. The mobile app includes all essential features of the web platform, optimized for
                on-the-go use. Push notifications keep you informed of important transactions, approval requests, and
                spending alerts in real-time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How does the receipt matching work?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Our AI-powered receipt matching system automatically connects receipts to transactions based on amount,
                vendor, and timing. When a team member makes a purchase, they simply snap a photo of the receipt and
                text it to our system or upload it through the app. Our AI extracts key information from the receipt and
                matches it to the corresponding transaction. If a receipt is missing, the system automatically sends
                reminders to the team member so you don't have to chase them down. The system learns over time, becoming
                more accurate with each receipt processed. You can also manually match receipts if needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">
                Can I set spending limits and restrictions?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Yes, JobVault gives you granular control over spending. You can set daily, weekly, or monthly spending
                limits for each card. You can also restrict cards to specific vendors or merchant categories, ensuring
                funds are only used for approved materials and services. For additional control, you can require
                pre-approval for purchases above a certain threshold. All spending rules can be adjusted in real-time,
                giving you complete flexibility to adapt to changing project needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">How do requisitions work?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                JobVault makes requisitions simple by automatically tagging expenses to specific job sites. When it's
                time to bill clients or developers, you can generate job-specific expense reports with all associated
                receipts and details. These reports can be exported to your accounting system or sent directly to
                clients. The system maintains a clear audit trail of all expenses, making it easy to justify charges and
                answer any questions from clients or developers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">What kind of support do you offer?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                We provide comprehensive support through multiple channels. All customers have access to email support
                with guaranteed response times based on your plan tier. Premium plans include dedicated account managers
                and priority phone support. Our knowledge base contains detailed guides, video tutorials, and best
                practices. We also offer regular webinars and training sessions to help you get the most out of
                JobVault. Our customer success team proactively monitors your account to identify opportunities for
                optimization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-zinc-900 rounded-lg px-6">
              <AccordionTrigger className="text-left py-4">Can I try JobVault before committing?</AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4">
                Yes, we offer a 14-day free trial that includes all features of our Professional plan. During the trial,
                you can set up your account, issue virtual cards, and test the receipt matching functionality. Our
                onboarding team will guide you through the setup process and answer any questions you have. There's no
                obligation to continue after the trial, and no credit card is required to start.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  )
}
