"use client"

export function getUtmParams() {
  if (typeof window === "undefined") {
    return {
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    }
  }

  const urlParams = new URLSearchParams(window.location.search)

  // Get UTM parameters from URL
  const utmSource = urlParams.get("utm_source") || ""
  const utmMedium = urlParams.get("utm_medium") || ""
  const utmCampaign = urlParams.get("utm_campaign") || ""

  // Store UTM parameters in sessionStorage for later use
  if (utmSource) sessionStorage.setItem("utm_source", utmSource)
  if (utmMedium) sessionStorage.setItem("utm_medium", utmMedium)
  if (utmCampaign) sessionStorage.setItem("utm_campaign", utmCampaign)

  // Return UTM parameters from URL or sessionStorage
  return {
    utmSource: utmSource || sessionStorage.getItem("utm_source") || "",
    utmMedium: utmMedium || sessionStorage.getItem("utm_medium") || "",
    utmCampaign: utmCampaign || sessionStorage.getItem("utm_campaign") || "",
  }
}
