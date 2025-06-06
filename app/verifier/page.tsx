// export default function VerifierPage() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-6">Ticket Verifier</h1>
//       {/* Your verification content here */}
//     </div>
//   )
// }

 // only for QR SCAN

"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Link } from "lucide-react"
import QRCodeVerification from "@/components/qr-verification"
import { useRouter } from "next/navigation"

const events = [
  {
    id: 1,
    title: "Bhutan Premier League",
    description: "The top-tier football competition in Bhutan featuring clubs from across the country battling for national glory.",
    date: "2025-06-10",
    time: "03:00 PM",
    location: "Changlimithang Stadium, Thimphu",
    price: 150,
    capacity: 1000,
    available: 2750,
    image: "/Bhutan_FF_logo.svg",
  }
]

type BookingStep = "events" | "verification"

export default function VerifierPage() {
  const [currentStep, setCurrentStep] = useState<BookingStep>("verification")
  const [selectedEvent, setSelectedEvent] = useState(events[0])
  const [verificationComplete, setVerificationComplete] = useState(false)
  

  if (currentStep === "verification" && selectedEvent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="App">
        </div>
        <QRCodeVerification
          event={selectedEvent}
          onVerificationComplete={() => setVerificationComplete(true)}
          onBack={() => setCurrentStep("events")}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="App">
       
      </div>
      <QRCodeVerification
        event={events[0]}
        onVerificationComplete={() => setVerificationComplete(true)}
        onBack={() => setCurrentStep("events")}
      />
    </div>
  )
}
  