import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JobVault | Bring Order to Job Site Expenses",
  description:
    "Cut costs by 15% with our expense cards that prevent overspending, eliminate receipt chasing, and maximize tax deductions.",
  metadataBase: new URL("https://jobvault.co"),
  openGraph: {
    title: "JobVault | Bring Order to Job Site Expenses",
    description:
      "Cut costs by 15% with our expense cards that prevent overspending, eliminate receipt chasing, and maximize tax deductions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JobVault - Bring Order to Job Site Expenses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobVault | Bring Order to Job Site Expenses",
    description:
      "Cut costs by 15% with our expense cards that prevent overspending, eliminate receipt chasing, and maximize tax deductions.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>

        <Script id="gc-card-webhook" strategy="afterInteractive">
          {`
    document.addEventListener('DOMContentLoaded', function() {
      console.log('GC Card webhook script loaded');
      
      const form = document.getElementById('contact-form');
      
      if (!form) {
        console.warn('Contact form not found on page');
        return;
      }
      
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if already submitted in this session
        if (sessionStorage.getItem('contactFormSubmitted')) {
          console.warn('Form already submitted in this session');
          alert('You have already submitted this form. Please wait before submitting again.');
          return;
        }
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Prepare data for the webhook
        const data = {
          name: name,
          email: email,
          message: message,
          url: window.location.href,
          submittedAt: new Date().toISOString()
        };
        
        console.log('Submitting data to Zapier:', data);
        
        // Send POST request to Zapier webhook
        fetch('https://hooks.zapier.com/hooks/catch/22588169/2xfpqdv/', {
          method: 'POST',
          body: JSON.stringify(data)
        })
        .then(response => {
          if (response.ok) {
            console.log('Zapier webhook fired');
            
            // Set flag in sessionStorage to prevent duplicate submissions
            sessionStorage.setItem('contactFormSubmitted', 'true');
            
            // Show success message
            alert('Thank you! Your message has been submitted.');
            form.reset();
          } else {
            console.error('Failed to submit form to Zapier');
            alert('There was an error submitting your message. Please try again later.');
          }
        })
        .catch(error => {
          console.error('Error submitting form to Zapier:', error);
          alert('There was an error submitting your message. Please try again later.');
        });
      });
    });
  `}
        </Script>
      </body>
    </html>
  )
}
