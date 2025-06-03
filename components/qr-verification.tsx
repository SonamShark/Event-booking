"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import QRCode from "qrcode"

interface QRVerificationProps {
  event: any
  onVerificationComplete: () => void
  onBack: () => void
}

export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    // Generate QR code for national ID verification
    const verificationData = {
      type: "national_id_verification",
      eventId: event.id,
      timestamp: Date.now(),
      redirectUrl: "https://verify.gov.ae/national-id",
    }

    QRCode.toDataURL(JSON.stringify(verificationData))
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error(err))
  }, [event.id])

  const handleVerify = () => {
    setIsVerifying(true)

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)

      // Auto proceed after showing success
      setTimeout(() => {
        onVerificationComplete()
      }, 2000)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <CardTitle>National ID Verification</CardTitle>
              <CardDescription>Verify your identity to book tickets</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Scan the QR code with your Emirates ID app to verify your identity
            </p>
          </div>

          <div className="flex justify-center">
            {qrCodeUrl && (
              <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
                <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code for verification" className="w-48 h-48" />
              </div>
            )}
          </div>

          <div className="text-center">
            {!isVerifying && !isVerified && (
              <Button onClick={handleVerify} className="w-full">
                Simulate Verification Complete
              </Button>
            )}

            {isVerifying && (
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Verifying your identity...</span>
              </div>
            )}

            {isVerified && (
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>Verification successful! Redirecting...</span>
              </div>
            )}
          </div>

          <div className="text-xs text-gray-500 text-center">
            <p>Your personal information is encrypted and secure</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
