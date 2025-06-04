// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { ArrowLeft, User, Mail, Phone, CreditCard } from "lucide-react"

// interface BookingFormProps {
//   event: any
//   onSubmit: (data: any) => void
//   onBack: () => void
// }

// export default function BookingForm({ event, onSubmit, onBack }: BookingFormProps) {
//   const [formData, setFormData] = useState({
//     // Pre-filled from National ID (simulated)
//     fullName: "Sonam",

//     nationalId: "784-1990-1234567-8",
//     dateOfBirth: "1990-05-15",
//     nationality: "UAE",
//     // User needs to fill these
//     email: "",
//     phone: "",
//     emergencyContact: "",
//     emergencyPhone: "",
//     ticketQuantity: "1",
//     specialRequirements: "",
//   })

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     onSubmit(formData)
//   }

//   const isFormValid = formData.email && formData.phone && formData.emergencyContact && formData.emergencyPhone

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="container mx-auto max-w-2xl">
//         <Card>
//           <CardHeader>
//             <div className="flex items-center gap-2 mb-2">
//               <Button variant="ghost" size="sm" onClick={onBack}>
//                 <ArrowLeft className="w-4 h-4" />
//               </Button>
//               <div>
//                 <CardTitle>Complete Your Booking</CardTitle>
//                 <CardDescription>Fill in the remaining details to book your ticket</CardDescription>
//               </div>
//             </div>
//           </CardHeader>

//           <CardContent>
//             <div className="mb-6 p-4 bg-blue-50 rounded-lg">
//               <h3 className="font-semibold text-blue-900 mb-2">Event Details</h3>
//               <p className="text-blue-800">{event.title}</p>
//               <p className="text-sm text-blue-600">
//                 {new Date(event.date).toLocaleDateString()} at {event.time}
//               </p>
//               <p className="text-sm text-blue-600">{event.location}</p>
//               <p className="font-semibold text-blue-900 mt-2">Price: ${event.price}</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Pre-filled from National ID */}
//               <div className="space-y-4">
//                 <h4 className="font-semibold flex items-center gap-2">
//                   <User className="w-4 h-4" />
//                   Personal Information (From National ID)
//                 </h4>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="fullName">Full Name</Label>
//                     <Input id="fullName" value={formData.fullName} disabled className="bg-gray-50" />
//                   </div>

//                   <div>
//                     <Label htmlFor="nationalId">National ID</Label>
//                     <Input id="nationalId" value={formData.nationalId} disabled className="bg-gray-50" />
//                   </div>

//                   <div>
//                     <Label htmlFor="dateOfBirth">Date of Birth</Label>
//                     <Input id="dateOfBirth" value={formData.dateOfBirth} disabled className="bg-gray-50" />
//                   </div>

//                   <div>
//                     <Label htmlFor="nationality">Nationality</Label>
//                     <Input id="nationality" value={formData.nationality} disabled className="bg-gray-50" />
//                   </div>
//                 </div>
//               </div>

//               {/* User needs to fill */}
//               <div className="space-y-4">
//                 <h4 className="font-semibold flex items-center gap-2">
//                   <Mail className="w-4 h-4" />
//                   Contact Information
//                 </h4>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="email">Email Address *</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => handleInputChange("email", e.target.value)}
//                       placeholder="your.email@example.com"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="phone">Phone Number *</Label>
//                     <Input
//                       id="phone"
//                       value={formData.phone}
//                       onChange={(e) => handleInputChange("phone", e.target.value)}
//                       placeholder="+971 50 123 4567"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <h4 className="font-semibold flex items-center gap-2">
//                   <Phone className="w-4 h-4" />
//                   Emergency Contact
//                 </h4> 

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
//                   <div>
//                     <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
//                     <Input
//                       id="emergencyContact"
//                       value={formData.emergencyContact}
//                       onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
//                       placeholder="Contact person name"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
//                     <Input
//                       id="emergencyPhone"
//                       value={formData.emergencyPhone}
//                       onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
//                       placeholder="+971 50 123 4567"
//                       required
//                     />
//                   </div> 
//                 </div>
//              </form> 
//              </div>

//               <div className="space-y-4">
//                 <h4 className="font-semibold flex items-center gap-2">
//                   <CreditCard className="w-4 h-4" />
//                   Booking Details
//                 </h4>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="ticketQuantity">Number of Tickets</Label>
//                     <Select
//                       value={formData.ticketQuantity}
//                       onValueChange={(value) => handleInputChange("ticketQuantity", value)}
//                     >
//                       <SelectTrigger>
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="1">1 Ticket</SelectItem>
//                         <SelectItem value="2">2 Tickets</SelectItem>
//                         <SelectItem value="3">3 Tickets</SelectItem>
//                         <SelectItem value="4">4 Tickets</SelectItem>
//                         <SelectItem value="5">5 Tickets</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   <div className="flex items-end">
//                     <div className="text-right">
//                       <p className="text-sm text-gray-600">Total Amount</p>
//                       <p className="text-2xl font-bold text-blue-600">
//                         ${event.price * Number.parseInt(formData.ticketQuantity)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
//                   <Textarea
//                     id="specialRequirements"
//                     value={formData.specialRequirements}
//                     onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
//                     placeholder="Any special requirements or accessibility needs..."
//                     rows={3}
//                   />
//                 </div>
//               </div>

//               <Button type="submit" className="w-full" size="lg" disabled={!isFormValid}>
//                 Submit Booking & Get Ticket Credential
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, User, Mail, Phone, CreditCard } from "lucide-react"

interface BookingFormProps {
  event: any
  onSubmit: (data: any) => void
  onBack: () => void
  nationalIdData: {
    fullName: string
    gender: string
    dataOfBirth: string
    nationality: string
  }
}

export default function BookingForm({ event, onSubmit, onBack, nationalIdData }: BookingFormProps) {
  const [formData, setFormData] = useState({
    // Pre-filled from National ID (simulated)
    fullName: nationalIdData.fullName,
    nationalId: nationalIdData.gender,
    dateOfBirth: nationalIdData.dataOfBirth,
    nationality: nationalIdData.nationality,
    // User needs to fill these
    email: "",
    phone: "",
    emergencyContact: "",
    emergencyPhone: "",
    ticketQuantity: "1",
    specialRequirements: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const isFormValid = formData.email && formData.phone && formData.emergencyContact && formData.emergencyPhone

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <CardTitle>Complete Your Booking</CardTitle>
                <CardDescription>Fill in the remaining details to book your ticket</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Event Details</h3>
              <p className="text-blue-800">{event.title}</p>
              <p className="text-sm text-blue-600">
                {new Date(event.date).toLocaleDateString()} at {event.time}
              </p>
              <p className="text-sm text-blue-600">{event.location}</p>
              <p className="font-semibold text-blue-900 mt-2">Price: ${event.price}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pre-filled from National ID */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Personal Information (From National ID)
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" value={formData.fullName} disabled className="bg-gray-50" />
                  </div>

                  <div>
                    <Label htmlFor="nationalId">National ID</Label>
                    <Input id="nationalId" value={formData.nationalId} disabled className="bg-gray-50" />
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input id="dateOfBirth" value={formData.dateOfBirth} disabled className="bg-gray-50" />
                  </div>

                  <div>
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input id="nationality" value={formData.nationality} disabled className="bg-gray-50" />
                  </div>
                </div>
              </div>

              {/* User needs to fill */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Information
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+971 50 123 4567"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency Contact
                </h4> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      placeholder="Contact person name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                    <Input
                      id="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      placeholder="+971 50 123 4567"
                      required
                    />
                  </div> 
                </div>
              </div>

              {/* Booking Details section */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Booking Details
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ticketQuantity">Number of Tickets</Label>
                    <Select
                      value={formData.ticketQuantity}
                      onValueChange={(value) => handleInputChange("ticketQuantity", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Ticket</SelectItem>
                        <SelectItem value="2">2 Tickets</SelectItem>
                        <SelectItem value="3">3 Tickets</SelectItem>
                        <SelectItem value="4">4 Tickets</SelectItem>
                        <SelectItem value="5">5 Tickets</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${event.price * Number.parseInt(formData.ticketQuantity)}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="specialRequirements">Special Requirements (Optional)</Label>
                  <Textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                    placeholder="Any special requirements or accessibility needs..."
                    rows={3}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={!isFormValid}>
                Submit Booking & Get Ticket Credential
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}