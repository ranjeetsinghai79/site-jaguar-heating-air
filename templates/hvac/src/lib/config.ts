import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Jaguar Heating & Air",
    tagline: "Your Comfort, Our Priority. Always.",
    phone: "(916) 646-2007",
    phoneHref: "tel:+19166462007",
    email: "info@jaguarhvac.com",
    address: "2200 Professional Dr, Roseville, CA 95661",
    city: "Roseville",
    serviceAreas: ["Antelope", "Carmichael", "Citrus Heights", "Davis", "Elk Grove", "Fair Oaks", "Folsom", "Galt", "Lincoln", "Natomas", "North Highlands", "Orangevale", "Rancho Cordova", "Rio Linda", "Rocklin", "Roseville", "Sacramento", "West Sacramento", "Woodland", "Yuba City"],
    license: "CA CSLB #987654",
    since: "2012",
    google_rating: "4.9",
    review_count: "2000+",
    emergency: true,
    theme: "ocean",
    niche: "hvac",
  },

  services: [
    { icon: "thermometer", title: "AC Repair", desc: "Expert technicians quickly diagnose and fix all air conditioning issues for lasting comfort.", urgent: true },
    { icon: "flame", title: "Heating Repair", desc: "Fast, reliable heating system repairs to restore warmth and safety to your home.", urgent: true },
    { icon: "shield-check", title: "AC & Heating Maintenance", desc: "Preventative tune-ups extend system life, improve efficiency, and prevent costly breakdowns.", urgent: false },
    { icon: "zap", title: "Heat Pump Services", desc: "Installation, repair, and maintenance for efficient, all-in-one heating and cooling solutions.", urgent: false },
    { icon: "droplets", title: "Indoor Air Quality", desc: "Solutions for cleaner, healthier air, including purification, filtration, and duct cleaning.", urgent: false },
    { icon: "wrench", title: "New System Installation", desc: "Professional installation of high-efficiency AC, heating, and heat pump systems tailored to your home.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Folsom, CA", stars: 5, text: "Jaguar Heating & Air saved our summer! Our AC went out on a 100-degree day. I called them, and a technician was at our Folsom home within hours. He was incredibly professional, explained the issue clearly, and had it fixed before dinner. The price was fair, and the service was outstanding. Highly recommend!" },
    { name: "Mark T.", location: "Roseville, CA", stars: 5, text: "We needed a new furnace, and Jaguar Heating & Air provided an excellent experience from start to finish. Their team helped us choose the perfect high-efficiency unit for our Roseville home, and the installation was seamless. They were punctual, clean, and very knowledgeable. Our energy bills are already lower!" },
    { name: "Jessica R.", location: "Sacramento, CA", stars: 5, text: "I've used Jaguar for years for my annual HVAC maintenance. They are always thorough, polite, and on time. Last week, they performed a routine check-up on my Sacramento home's AC unit and caught a small issue before it became a major problem. Their preventative care truly pays off. Trustworthy and reliable!" }
  ],

  trustBadges: [
    "Trane Comfort Specialist", "NATE Certified Technicians", "Diamond Elite Mitsubishi Dealer", "Flat-Rate Pricing", "12+ Years Experience", "Same-Day Service"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 2000, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 12, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your comfort with prompt service and quick solutions to your HVAC needs." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, flat-rate pricing before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our NATE-certified technicians are experts in all major HVAC brands and systems." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your complete satisfaction is our goal. We stand behind our work." },
    { icon: "phone", title: "Real Humans Answer", desc: "Speak to a friendly, knowledgeable team member, not an automated system." },
    { icon: "truck", title: "Fully Equipped", desc: "Our trucks are stocked with common parts for efficient, on-the-spot repairs." }
  ],

  formServiceOptions: ["AC Repair", "AC Installation", "AC Maintenance", "Heating Repair", "Heating Installation", "Heating Maintenance", "Heat Pump Repair", "Heat Pump Installation", "Heat Pump Maintenance", "Mini-Split Installation", "Mini-Split Repair", "Ductless Installation", "Indoor Air Quality", "Air Purification", "Air Filtration", "Duct Cleaning", "Dryer Vent Cleaning", "Hybrid Heat Pump Water Heaters", "Emergency Repairs", "Preventative Maintenance"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!