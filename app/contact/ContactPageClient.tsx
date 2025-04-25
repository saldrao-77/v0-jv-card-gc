"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPageClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create the submission data
      const data = {
        name,
        email,
        message,
        url: window.location.href,
        submittedAt: new Date().toISOString(),
      }

      // Send POST request directly to Zapier webhook
      const response = await fetch("https://hooks.zapier.com/hooks/catch/22588169/2xfpqdv/", {
        method: "POST",
        body: JSON.stringify(data),
      })

      if (response.ok) {
        console.log("Form submitted successfully")
        setSubmitSuccess(true)
        setIsSubmitting(false)
      } else {
        console.error("Failed to submit form")
        alert("There was an error submitting your message. Please try again later.")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your message. Please try again later.")
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">CONTACT US</h1>
        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Have questions about JobVault? Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <div className="max-w-md mx-auto bg-zinc-900 p-8 rounded-lg">
          {submitSuccess ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2 font-heading">Thank You!</h2>
              <p className="text-white/80 mb-6">
                Your message has been received. We'll get back to you as soon as possible.
              </p>
              <Button
                onClick={() => {
                  setSubmitSuccess(false)
                  setName("")
                  setEmail("")
                  setMessage("")
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  className="bg-zinc-800 border-zinc-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-zinc-800 border-zinc-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  className="bg-zinc-800 border-zinc-700 min-h-[150px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
