"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import QRCodeVerification from "@/components/qr-verification"
import BookingForm from "@/components/booking-form"
import CredentialIssuance from "@/components/credential-issuance"

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
    image: "/BFF.jpeg?height=80px&width=80px",
  },
]

type BookingStep = "events" | "verification" | "form" | "credential"

export default function EventBooking() {
  const [currentStep, setCurrentStep] = useState<BookingStep>("events")
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [verificationComplete, setVerificationComplete] = useState(false)
  const [formData, setFormData] = useState<any>(null)

  const handleBookTicket = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setCurrentStep("verification")
  }

  const handleVerificationComplete = () => {
    setVerificationComplete(true)
    setCurrentStep("form")
  }

  const handleFormSubmit = (data: any) => {
    setFormData(data)
    setCurrentStep("credential")
  }

  const handleCredentialStored = () => {
    setCurrentStep("events")
    setSelectedEvent(null)
    setVerificationComplete(false)
    setFormData(null)
  }

  if (currentStep === "verification" && selectedEvent) {
    return (
      <QRCodeVerification
        event={selectedEvent}
        onVerificationComplete={handleVerificationComplete}
        onBack={() => setCurrentStep("events")}
      />
    )
  }

  if (currentStep === "form" && selectedEvent) {
    return (
      <BookingForm event={selectedEvent} onSubmit={handleFormSubmit} onBack={() => setCurrentStep("verification")} />
    )
  }

  if (currentStep === "credential" && selectedEvent && formData) {
    return <CredentialIssuance event={selectedEvent} formData={formData} onCredentialStored={handleCredentialStored} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Ticket Booking</h1>
          <p className="text-xl text-gray-600">Discover and book tickets for amazing events</p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 max-w-4xl w-full">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                  <Badge className="absolute top-4 right-4 bg-green-500">{event.available} tickets left</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {event.capacity} total capacity
                  </div>

                  <div className="text-2xl font-bold text-blue-600">${event.price}</div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" onClick={() => handleBookTicket(event)} disabled={event.available === 0}>
                    {event.available === 0 ? "Sold Out" : "Book Ticket"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}