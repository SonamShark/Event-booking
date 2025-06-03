"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Download, Smartphone, ArrowRight } from "lucide-react"
import QRCode from "qrcode"

interface CredentialIssuanceProps {
  event: any
  formData: any
  onCredentialStored: () => void
}

export default function CredentialIssuance({ event, formData, onCredentialStored }: CredentialIssuanceProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [isStored, setIsStored] = useState(false)

  useEffect(() => {
    // Generate QR code for credential issuance
    const credentialData = {
      type: "event_ticket_credential",
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: event.time,
      eventLocation: event.location,
      ticketHolder: formData.fullName,
      nationalId: formData.nationalId,
      ticketQuantity: formData.ticketQuantity,
      totalAmount: event.price * Number.parseInt(formData.ticketQuantity),
      bookingId: `BK${Date.now()}`,
      issueDate: new Date().toISOString(),
      walletUrl: "iwallet://store-credential",
    }

    QRCode.toDataURL(JSON.stringify(credentialData))
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error(err))
  }, [event, formData])

  const handleStoreInWallet = () => {
    // Simulate storing in wallet
    setIsStored(true)

    // Auto redirect after showing success
    setTimeout(() => {
      onCredentialStored()
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-800">Booking Successful!</CardTitle>
          <CardDescription>Your ticket credential is ready</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Event:</span>
                <span className="font-medium">{event.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span>
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tickets:</span>
                <span>{formData.ticketQuantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-green-600">
                  ${event.price * Number.parseInt(formData.ticketQuantity)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Booking ID:</span>
                <span className="font-mono text-xs">BK{Date.now()}</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-2">Store Your Ticket Credential</h4>
            <p className="text-sm text-gray-600 mb-4">
              Scan the QR code with your iWallet app to store your ticket credential securely
            </p>
          </div>

          <div className="flex justify-center">
            {qrCodeUrl && (
              <div className="p-4 bg-white rounded-lg border-2 border-green-200">
                <img src={qrCodeUrl || "/placeholder.svg"} alt="Credential QR Code" className="w-48 h-48" />
              </div>
            )}
          </div>

          <div className="space-y-3">
            {!isStored ? (
              <>
                <Button onClick={handleStoreInWallet} className="w-full bg-green-600 hover:bg-green-700">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Simulate Store in iWallet
                </Button>

                <div className="text-center">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Backup
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span>Credential stored successfully!</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <ArrowRight className="w-4 h-4" />
                  <span>Redirecting to home...</span>
                </div>
              </div>
            )}
          </div>

          <div className="text-xs text-gray-500 text-center space-y-1">
            <p>Your ticket credential contains encrypted verification data</p>
            <p>Present this credential at the event entrance for verification</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
