// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
// // import QRCode from "qrcode"


// // interface QRVerificationProps {
// //   event: any
// //   onVerificationComplete: () => void
// //   onBack: () => void
// // }

// // export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
// //   const [qrCodeUrl, setQrCodeUrl] = useState("")
// //   const [isVerifying, setIsVerifying] = useState(false)
// //   const [isVerified, setIsVerified] = useState(false)
// //   const [proofRequestId, setProofRequestId] = useState<string | undefined>();
// //   const [data, setData] = useState(); 
// //   const [proofCredentialAttributes, setProofCredentialAttributes] = useState();
// //   const [invitation, setInvitation] = useState<string | undefined>();
// //   const [isLoading, setIsLoading] = useState(false)

// //   // useEffect(() => {
// //   //   // Generate QR code for national ID verification
// //   //   const verificationData = {
// //   //     type: "national_id_verification",
// //   //     eventId: event.id,
// //   //     timestamp: Date.now(),
// //   //     redirectUrl: "https://verify.gov.ae/national-id",
// //   //   }

// //   //   QRCode.toDataURL(JSON.stringify(verificationData))
// //   //     .then((url) => setQrCodeUrl(url))
// //   //     .catch((err) => console.error(err))
// //   // }, [event.id])


// //   const handleSubmit = async () => {
// //     setIsLoading(true); // Start loading
// //     setQrCodeUrl("");   // Clear previous QR
// //     setInvitation("");  // Clear previous invitation
// //     const payload = {
// //       "protocolVersion": "v2",
// //       "proofFormats": {
// //         "presentationExchange": {
// //           "presentationDefinition": {
// //             "id": "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
// //             "input_descriptors": [
// //               {
// //                 "constraints": {
// //                   "fields": [
// //                     {
// //                       "path": [
// //                         "$.credentialSubject['Full Name']",
// //                         "$.credentialSubject['Date of Birth']",
// //                         // "$.credentialSubject['Blood Type']",
// //                         "$.credentialSubject.Gender",
// //                         "$.credentialSubject.Citizenship"
// //                       ]
// //                     }
// //                   ]
// //                 },
// //                 "id": "input_1",
// //                 "schema": [
// //                   {
// //                     "uri": "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
// //                   }
// //                 ]
// //               }
// //             ]
// //           }
// //         }
// //     }
// //     }
// //     try {
// //       const response = await fetch(
// //         "http://localhost:6001/api/proof/request-proof",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(payload),
// //         }
// //       );

// //       if (!response.ok) throw new Error("Request failed");

// //       const result = await response.json();
// //       if (result.success) {
// //         setProofRequestId(result.proofRequestId);
// //         setInvitation(result.invitation);

// //         // Generate QR code for the invitation link
// //         if (result.invitation) {
// //           QRCode.toDataURL(result.invitation)
// //             .then(url => setQrCodeUrl(url))
// //             .catch(err => console.error(err))
// //         }
// //       }
// //       console.log("Response:", JSON.stringify(result, null, 2));
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //   };

// //   // const fetchDataforProof = async () => {
// //   //   try {
// //   //     const response = await fetch(
// //   //       `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
// //   //     );
// //   //     if (!response.ok) throw new Error("Failed to fetch record");

// //   //     const data = await response.json();
// //   //     console.log("\n\n\n\n data = ", JSON.stringify(data, null, 2));
// //   //     const credentialSubject =
// //   //       data.record.presentation.presentationExchange.verifiableCredential[0]
// //   //         .credentialSubject;
// //   //     console.log(credentialSubject);
// //   //     setProofCredentialAttributes(credentialSubject);
// //   //     setData(data);
// //   //   } catch (error) {
// //   //     console.error("Error:", error);
// //   //   }


// //   // }
// //   // const handleSubmit = () => {
// //   //   setIsVerifying(true)

// //   //   // Simulate verification process
// //   //   setTimeout(() => {
// //   //     setIsVerifying(false)
// //   //     setIsVerified(true)

// //   //     // Auto proceed after showing success
// //   //     setTimeout(() => {
// //   //       onVerificationComplete()
// //   //     }, 2000)
// //   //   }, 3000)
// //   // }
// //   useEffect(() => {
// //     handleSubmit();
// //   }, []);


// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader>
// //           <div className="flex items-center gap-2 mb-2">
// //             <Button variant="ghost" size="sm" onClick={onBack}>
// //               <ArrowLeft className="w-4 h-4" />
// //             </Button>
// //             <div>
// //               <CardTitle>National ID Verification</CardTitle>
// //               <CardDescription>Verify your identity to book tickets</CardDescription>
// //             </div>
// //           </div>
// //         </CardHeader>

// //         <CardContent className="space-y-6">
// //           <div className="text-center">
// //             <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
// //             <p className="text-sm text-gray-600 mb-4">
// //               Scan the QR code with your National ID app to verify your identity
// //             </p>
// //           </div>

// //           <div className="flex justify-center">
// //             {qrCodeUrl && (
// //               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
// //                 <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code for verification" className="w-48 h-48" />
// //               </div>
// //             )}
// //             {/* {qrCodeUrl ? (
// //               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
// //                 <img src={qrCodeUrl} alt="QR Code for verification" className="w-48 h-48" />
// //               </div>
// //             ) : (
// //               <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
// //                 {isLoading ? (
// //                   <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
// //                 ) : (
// //                   <span className="text-gray-400">QR Code will appear here</span>
// //                 )}
// //               </div>
// //             )} */}

// //             {invitation && (
// //               <div className="text-xs text-gray-500 break-all p-2 bg-gray-50 rounded">
// //                 {invitation}
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-center">
// //             {!isVerifying && !isVerified && (
// //               <Button onClick={handleSubmit} className="w-full">
// //                 New verification request
// //               </Button>
// //             )}

// //             {isVerifying && (
// //               <div className="flex items-center justify-center gap-2 text-blue-600">
// //                 <Loader2 className="w-5 h-5 animate-spin" />
// //                 <span>Verifying your identity...</span>
// //               </div>
// //             )}

// //             {isVerified && (
// //               <div className="flex items-center justify-center gap-2 text-green-600">
// //                 <CheckCircle className="w-5 h-5" />
// //                 <span>Verification successful! Redirecting...</span>
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-xs text-gray-500 text-center">
// //             <p>Your personal information is encrypted and secure</p>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }
// // // function setProofCredentialAttributes(credentialSubject: any) {
// // //   throw new Error("Function not implemented.")
// // // }

// // // function setData(data: any) {
// // //   throw new Error("Function not implemented.")
// // // }

// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
// // import QRCode from "qrcode";

// // interface QRVerificationProps {
// //   event: any
// //   onVerificationComplete: () => void
// //   onBack: () => void
// // }

// // export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
// //   const [qrCodeUrl, setQrCodeUrl] = useState("")
// //   const [isVerifying, setIsVerifying] = useState(false)
// //   const [isVerified, setIsVerified] = useState(false)
// //   const [proofRequestId, setProofRequestId] = useState<string | undefined>()
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [data, setData] = useState();
// //   const [proofCredentialAttributes, setProofCredentialAttributes] = useState();

// //   const handleSubmit = async () => {
// //     setIsLoading(true)
// //     setQrCodeUrl("")
    
// //     const payload = {
// //       "protocolVersion": "v2",
// //       "proofFormats": {
// //         "presentationExchange": {
// //           "presentationDefinition": {
// //             "id": "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
// //             "input_descriptors": [
// //               {
// //                 "constraints": {
// //                   "fields": [
// //                     {
// //                       "path": [
// //                         "$.credentialSubject['Full Name']",
// //                         "$.credentialSubject['Date of Birth']",
// //                         "$.credentialSubject.Gender",
// //                         "$.credentialSubject.Citizenship"
// //                       ]
// //                     }
// //                   ]
// //                 },
// //                 "id": "input_1",
// //                 "schema": [
// //                   {
// //                     "uri": "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
// //                   }
// //                 ]
// //               }
// //             ]
// //           }
// //         }
// //       }
// //     }

// //     try {
// //       const response = await fetch(
// //         "http://localhost:6001/api/proof/request-proof",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(payload),
// //         }
// //       )

// //       if (!response.ok) throw new Error("Request failed")

// //       const result = await response.json()
// //       if (result.success) {
// //         setProofRequestId(result.proofRequestId)
        
// //         if (result.invitation) {
// //           QRCode.toDataURL(result.invitation)
// //             .then(url => setQrCodeUrl(url))
// //             .catch(err => console.error(err))
// //         }
// //       }
// //     } catch (error) {
// //       console.error("Error:", error)
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //  const fetchDataforProof = async () => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
// //       );
// //       if (!response.ok) throw new Error("Failed to fetch record");

// //       const data = await response.json();
// //       console.log("\n\n\n\n data = ", JSON.stringify(data, null, 2));
// //       const credentialSubject =
// //         data.record.presentation.presentationExchange.verifiableCredential[0]
// //           .credentialSubject;
// //       console.log(credentialSubject);
// //       setProofCredentialAttributes(credentialSubject);
// //       setData(data);
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //   };
// //   useEffect(() => {
// //     handleSubmit()
// //   }, [])

// //   useEffect(() => {
// //     console.log("\n\n\n method called = ", proofRequestId);
// //     const fetchProofStatus = async () => {
// //       try {
// //         const res = await fetch(
// //           `http://localhost:6001/api/proof/proof-record/${proofRequestId}`
// //         );
// //         const data = await res.json();

// //         if (data.success) {
// //           console.log("Current state:", data.record.state);

// //           if (data.record.state === "done") {
// //             clearInterval(id); // Stop lopp call
// //             setIsVerified(true); // 
// //             fetchDataforProof();
// //           }
// //         }
// //       } catch (err) {
// //         console.error("Polling error:", err);
// //       }
// //     };

// //     const id = setInterval(fetchProofStatus, 2000);

// //     return () => clearInterval(id);
// //   }, [proofRequestId]);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader>
// //           <div className="flex items-center gap-2 mb-2">
// //             <Button variant="ghost" size="sm" onClick={onBack}>
// //               <ArrowLeft className="w-4 h-4" />
// //             </Button>
// //             <div>
// //               <CardTitle>National ID Verification</CardTitle>
// //               <CardDescription>Verify your identity to book tickets</CardDescription>
// //             </div>
// //           </div>
// //         </CardHeader>

// //         <CardContent className="space-y-6">
// //           <div className="text-center">
// //             <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
// //             <p className="text-sm text-gray-600 mb-4">
// //               Scan the QR code with your National ID app to verify your identity
// //             </p>
// //           </div>

// //           <div className="flex flex-col items-center gap-4">
// //             {qrCodeUrl ? (
// //               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
// //                 <img src={qrCodeUrl} alt="QR Code for verification" className="w-48 h-48" />
// //               </div>
// //             ) : (
// //               <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
// //                 {isLoading ? (
// //                   <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
// //                 ) : (
// //                   <span className="text-gray-400">QR Code will appear here</span>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-center">
// //             {!isVerifying && !isVerified && (
// //               <Button onClick={handleSubmit} className="w-full" disabled={isLoading}>
// //                 {isLoading ? (
// //                   <Loader2 className="w-4 h-4 animate-spin mr-2" />
// //                 ) : null}
// //                 {isLoading ? "Generating..." : "New verification request"}
// //               </Button>
// //             )}

// //             {isVerifying && (
// //               <div className="flex items-center justify-center gap-2 text-blue-600">
// //                 <Loader2 className="w-5 h-5 animate-spin" />
// //                 <span>Verifying your identity...</span>
// //               </div>
// //             )}

// //             {isVerified && (
// //               <div className="flex items-center justify-center gap-2 text-green-600">
// //                 <CheckCircle className="w-5 h-5" />
// //                 <span>Verification successful! Redirecting...</span>
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-xs text-gray-500 text-center">
// //             <p>Your personal information is encrypted and secure</p>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }

// // // function setProofCredentialAttributes(credentialSubject: any) {
// // //   throw new Error("Function not implemented.")
// // // }
// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
// // import QRCode from "qrcode";

// // interface QRVerificationProps {
// //   event: any
// //   onVerificationComplete: () => void
// //   onBack: () => void
// // }

// // export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
// //   const [qrCodeUrl, setQrCodeUrl] = useState("")
// //   const [isVerifying, setIsVerifying] = useState(false)
// //   const [isVerified, setIsVerified] = useState(false)
// //   const [proofRequestId, setProofRequestId] = useState<string | undefined>()
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [isPolling, setIsPolling] = useState(false)
// //   const [data, setData] = useState()
// //   const [proofCredentialAttributes, setProofCredentialAttributes] = useState()

// //   const handleSubmit = async () => {
// //     if (proofRequestId) return; // Prevent multiple submissions
    
// //     setIsLoading(true)
// //     setQrCodeUrl("")
    
// //     const payload = {
// //       "protocolVersion": "v2",
// //       "proofFormats": {
// //         "presentationExchange": {
// //           "presentationDefinition": {
// //             "id": "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
// //             "input_descriptors": [
// //               {
// //                 "constraints": {
// //                   "fields": [
// //                     {
// //                       "path": [
// //                         "$.credentialSubject['Full Name']",
// //                         "$.credentialSubject['Date of Birth']",
// //                         "$.credentialSubject.Gender",
// //                         "$.credentialSubject.Citizenship"
// //                       ]
// //                     }
// //                   ]
// //                 },
// //                 "id": new Date(),
// //                 "schema": [
// //                   {
// //                     "uri": "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
                    
// //                   }
// //                 ]
// //               }
// //             ]
// //           }
// //         }
// //       }
// //     }

// //     try {
// //       const response = await fetch(
// //         "http://localhost:6001/api/proof/request-proof",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(payload),
// //         }
// //       )

// //       if (!response.ok) {
// //         const errorData = await response.json()
// //         throw new Error(errorData.error || "Request failed")
// //       }

// //       const result = await response.json()
// //       if (result.success) {
// //         setProofRequestId(result.proofRequestId)
        
// //         if (result.invitation) {
// //           QRCode.toDataURL(result.invitation)
// //             .then(url => setQrCodeUrl(url))
// //             .catch(err => console.error(err))
// //         }
// //       }
// //     } catch (error) {
// //       console.error("Error:", error)
// //       if (error instanceof Error) {
// //         alert(`Failed to start verification: ${error.message}`)
// //       } else {
// //         alert("Failed to start verification: Unknown error")
// //       }
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const fetchDataforProof = async () => {
// //     if (!proofRequestId) return
    
// //     try {
// //       const response = await fetch(
// //         `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
// //       )
// //       if (!response.ok) throw new Error("Failed to fetch record")

// //       const data = await response.json()
// //       const credentialSubject =
// //         data.record.presentation.presentationExchange.verifiableCredential[0]
// //           .credentialSubject
// //       setProofCredentialAttributes(credentialSubject)
// //       setData(data)
// //     } catch (error) {
// //       console.error("Error:", error)
// //     }
// //   }

// //   useEffect(() => {
// //     if (!proofRequestId) {
// //       handleSubmit()
// //     }
// //   }, [])

// //   useEffect(() => {
// //     if (!proofRequestId) return

// //     const fetchProofStatus = async () => {
// //       setIsPolling(true)
// //       try {
// //         const res = await fetch(
// //           `http://localhost:6001/api/proof/proof-record/${proofRequestId}`
// //         )
        
// //         if (!res.ok) {
// //           throw new Error(`HTTP error! status: ${res.status}`)
// //         }

// //         const data = await res.json()

// //         if (data.success) {
// //           console.log("Current state:", data.record.state)

// //           if (data.record.state === "done") {
// //             setIsVerified(true)
// //             await fetchDataforProof()
// //             onVerificationComplete()
// //           }
// //         }
// //       } catch (err) {
// //         console.error("Polling error:", err)
// //       } finally {
// //         setIsPolling(false)
// //       }
// //     }

// //     const intervalId = setInterval(fetchProofStatus, 2000)
// //     return () => clearInterval(intervalId)
// //   }, [proofRequestId])

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader>
// //           <div className="flex items-center gap-2 mb-2">
// //             <Button variant="ghost" size="sm" onClick={onBack}>
// //               <ArrowLeft className="w-4 h-4" />
// //             </Button>
// //             <div>
// //               <CardTitle>National ID Verification</CardTitle>
// //               <CardDescription>Verify your identity to book tickets</CardDescription>
// //             </div>
// //           </div>
// //         </CardHeader>

// //         <CardContent className="space-y-6">
// //           <div className="text-center">
// //             <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
// //             <p className="text-sm text-gray-600 mb-4">
// //               Scan the QR code with your National ID app to verify your identity
// //             </p>
// //           </div>

// //           <div className="flex flex-col items-center gap-4">
// //             {qrCodeUrl ? (
// //               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
// //                 <img src={qrCodeUrl} alt="QR Code for verification" className="w-48 h-48" />
// //               </div>
// //             ) : (
// //               <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
// //                 {isLoading ? (
// //                   <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
// //                 ) : (
// //                   <span className="text-gray-400">QR Code will appear here</span>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-center">
// //             {!isVerifying && !isVerified && (
// //               <Button 
// //                 onClick={handleSubmit} 
// //                 className="w-full" 
// //                 disabled={isLoading || !!proofRequestId}
// //               >
// //                 {isLoading ? (
// //                   <Loader2 className="w-4 h-4 animate-spin mr-2" />
// //                 ) : null}
// //                 {isLoading ? "Generating..." : "New verification request"}
// //               </Button>
// //             )}

// //             {(isPolling || isVerifying) && (
// //               <div className="flex items-center justify-center gap-2 text-blue-600">
// //                 <Loader2 className="w-5 h-5 animate-spin" />
// //                 <span>Verifying your identity...</span>
// //               </div>
// //             )}

// //             {isVerified && (
// //               <div className="flex items-center justify-center gap-2 text-green-600">
// //                 <CheckCircle className="w-5 h-5" />
// //                 <span>Verification successful! Redirecting...</span>
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-xs text-gray-500 text-center">
// //             <p>Your personal information is encrypted and secure</p>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }

// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
// // import QRCode from "qrcode"

// // interface VerifiedData {
// //   fullName: string
// //   dateOfBirth: string
// //   gender: string
// //   citizenship: string
// // }

// // interface QRVerificationProps {
// //   event: any
// //   onVerificationComplete: (verifiedData: VerifiedData) => void
// //   onBack: () => void
// // }

// // export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
// //   const [qrCodeUrl, setQrCodeUrl] = useState("")
// //   const [isVerifying, setIsVerifying] = useState(false)
// //   const [isVerified, setIsVerified] = useState(false)
// //   const [proofRequestId, setProofRequestId] = useState<string | undefined>()
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [isPolling, setIsPolling] = useState(false)
// //   const [error, setError] = useState<string | null>(null)

// //   const handleSubmit = async () => {
// //     if (proofRequestId) return; // Prevent multiple submissions
    
// //     setIsLoading(true)
// //     setQrCodeUrl("")
// //     setError(null)
    
// //     const payload = {
// //       "protocolVersion": "v2",
// //       "proofFormats": {
// //         "presentationExchange": {
// //           "presentationDefinition": {
// //             "id": "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
// //             "input_descriptors": [
// //               {
// //                 "constraints": {
// //                   "fields": [
// //                     {
// //                       "path": [
// //                         "$.credentialSubject['Full Name']",
// //                         "$.credentialSubject['Date of Birth']",
// //                         "$.credentialSubject.Gender",
// //                         "$.credentialSubject.Citizenship"
// //                       ]
// //                     }
// //                   ]
// //                 },
// //                 "id": new Date().toISOString(),
// //                 "schema": [
// //                   {
// //                     "uri": "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
// //                   }
// //                 ]
// //               }
// //             ]
// //           }
// //         }
// //       }
// //     }

// //     try {
// //       const response = await fetch(
// //         "http://localhost:6001/api/proof/request-proof",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(payload),
// //         }
// //       )

// //       if (!response.ok) {
// //         const errorData = await response.json()
// //         throw new Error(errorData.error || "Request failed")
// //       }

// //       const result = await response.json()
// //       if (result.success) {
// //         setProofRequestId(result.proofRequestId)
        
// //         if (result.invitation) {
// //           QRCode.toDataURL(result.invitation)
// //             .then(url => setQrCodeUrl(url))
// //             .catch(err => {
// //               console.error(err)
// //               setError("Failed to generate QR code")
// //             })
// //         }
// //       }
// //     } catch (error) {
// //       console.error("Error:", error)
// //       setError(error instanceof Error ? error.message : "Failed to start verification")
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const fetchVerifiedData = async (): Promise<VerifiedData | null> => {
// //     if (!proofRequestId) return null
    
// //     try {
// //       const response = await fetch(
// //         `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
// //       )
// //       if (!response.ok) throw new Error("Failed to fetch verification record")

// //       const data = await response.json()
// //       const credentialSubject =
// //         data.record.presentation.presentationExchange.verifiableCredential[0]
// //           .credentialSubject

// //       return {
// //         fullName: credentialSubject['Full Name'],
// //         dateOfBirth: credentialSubject['Date of Birth'],
// //         gender: credentialSubject.Gender,
// //         citizenship: credentialSubject.Citizenship
// //       }
// //     } catch (error) {
// //       console.error("Error fetching verified data:", error)
// //       setError("Failed to fetch verified data")
// //       return null
// //     }
// //   }

// //   useEffect(() => {
// //     if (!proofRequestId) {
// //       handleSubmit()
// //     }
// //   }, [])

// //   useEffect(() => {
// //     if (!proofRequestId) return

// //     let pollingInterval: NodeJS.Timeout
// //     let timeout: NodeJS.Timeout

// //     const fetchProofStatus = async () => {
// //       try {
// //         const res = await fetch(
// //           `http://localhost:6001/api/proof/proof-record/${proofRequestId}`
// //         )
        
// //         if (!res.ok) {
// //           throw new Error(`HTTP error! status: ${res.status}`)
// //         }

// //         const data = await res.json()

// //         if (data.success) {
// //           console.log("Current state:", data.record.state)

// //           if (data.record.state === "done") {
// //             setIsVerified(true)
// //             setIsPolling(false)
// //             const verifiedData = await fetchVerifiedData()
            
// //             if (verifiedData) {
// //               onVerificationComplete(verifiedData)
// //             } else {
// //               setError("Failed to extract verified data")
// //             }
            
// //             // Clean up
// //             clearInterval(pollingInterval)
// //             clearTimeout(timeout)
// //           }
// //         }
// //       } catch (err) {
// //         console.error("Polling error:", err)
// //         setError("Verification process failed")
// //         setIsPolling(false)
// //         clearInterval(pollingInterval)
// //         clearTimeout(timeout)
// //       }
// //     }

// //     // Start polling
// //     setIsPolling(true)
// //     pollingInterval = setInterval(fetchProofStatus, 2000)
    
// //     // Add timeout to prevent infinite polling (5 minutes max)
// //     timeout = setTimeout(() => {
// //       clearInterval(pollingInterval)
// //       setIsPolling(false)
// //       setError("Verification timed out. Please try again.")
// //     }, 300000) // 5 minutes

// //     return () => {
// //       clearInterval(pollingInterval)
// //       clearTimeout(timeout)
// //     }
// //   }, [proofRequestId])

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader>
// //           <div className="flex items-center gap-2 mb-2">
// //             <Button variant="ghost" size="sm" onClick={onBack}>
// //               <ArrowLeft className="w-4 h-4" />
// //             </Button>
// //             <div>
// //               <CardTitle>National ID Verification</CardTitle>
// //               <CardDescription>Verify your identity to book tickets</CardDescription>
// //             </div>
// //           </div>
// //         </CardHeader>

// //         <CardContent className="space-y-6">
// //           <div className="text-center">
// //             <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
// //             <p className="text-sm text-gray-600 mb-4">
// //               Scan the QR code with your National ID app to verify your identity
// //             </p>
// //           </div>

// //           {error && (
// //             <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
// //               {error}
// //             </div>
// //           )}

// //           <div className="flex flex-col items-center gap-4">
// //             {qrCodeUrl ? (
// //               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
// //                 <img src={qrCodeUrl} alt="QR Code for verification" className="w-48 h-48" />
// //               </div>
// //             ) : (
// //               <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
// //                 {isLoading ? (
// //                   <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
// //                 ) : (
// //                   <span className="text-gray-400">QR Code will appear here</span>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-center">
// //             {/* {!isVerifying && !isVerified && (
// //               <Button 
// //                 onClick={handleSubmit} 
// //                 className="w-full" 
// //                 disabled={isLoading || !!proofRequestId}
// //               >
// //                 {isLoading ? (
// //                   <Loader2 className="w-4 h-4 animate-spin mr-2" />
// //                 ) : null}
// //                 {isLoading ? "Generating..." : "New verification request"}
// //               </Button>
// //             )} */}
// //              {!isVerifying && !isVerified && (
// //               <Button onClick={handleVerify} className="w-full">
// //                 Simulate Verification Complete
// //               </Button>
// //             )}

// //             {(isPolling || isVerifying) && (
// //               <div className="flex items-center justify-center gap-2 text-blue-600">
// //                 <Loader2 className="w-5 h-5 animate-spin" />
// //                 <span>Verifying your identity...</span>
// //               </div>
// //             )}

// //             {isVerified && (
// //               <div className="flex items-center justify-center gap-2 text-green-600">
// //                 <CheckCircle className="w-5 h-5" />
// //                 <span>Verification successful! Redirecting...</span>
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-xs text-gray-500 text-center">
// //             <p>Your personal information is encrypted and secure</p>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }
// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
// // import QRCode from "qrcode"

// // interface VerifiedData {
// //   fullName: string
// //   dateOfBirth: string
// //   gender: string
// //   citizenship: string
// // }

// // interface QRVerificationProps {
// //   event: any
// //   onVerificationComplete: (verifiedData: VerifiedData) => void
// //   onBack: () => void
// // }

// // export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
// //   const [qrCodeUrl, setQrCodeUrl] = useState("")
// //   const [isVerifying, setIsVerifying] = useState(false)
// //   const [isVerified, setIsVerified] = useState(false)
// //   const [proofRequestId, setProofRequestId] = useState<string | undefined>()
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [isPolling, setIsPolling] = useState(false)
// //   const [error, setError] = useState<string | null>(null)

// //   const handleSubmit = async () => {
// //     if (proofRequestId) return; // Prevent multiple submissions
    
// //     setIsLoading(true)
// //     setQrCodeUrl("")
// //     setError(null)
    
// //     const payload = {
// //       "protocolVersion": "v2",
// //       "proofFormats": {
// //         "presentationExchange": {
// //           "presentationDefinition": {
// //             "id": "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
// //             "input_descriptors": [
// //               {
// //                 "constraints": {
// //                   "fields": [
// //                     {
// //                       "path": [
// //                         "$.credentialSubject['Full Name']",
// //                         "$.credentialSubject['Date of Birth']",
// //                         "$.credentialSubject.Gender",
// //                         "$.credentialSubject.Citizenship"
// //                       ]
// //                     }
// //                   ]
// //                 },
// //                 "id": new Date().toISOString(),
// //                 "schema": [
// //                   {
// //                     "uri": "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
// //                   }
// //                 ]
// //               }
// //             ]
// //           }
// //         }
// //       }
// //     }

// //     try {
// //       const response = await fetch(
// //         "http://localhost:6001/api/proof/request-proof",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(payload),
// //         }
// //       )

// //       if (!response.ok) {
// //         const errorData = await response.json()
// //         throw new Error(errorData.error || "Request failed")
// //       }

// //       const result = await response.json()
// //       if (result.success) {
// //         setProofRequestId(result.proofRequestId)
        
// //         if (result.invitation) {
// //           QRCode.toDataURL(result.invitation)
// //             .then(url => {
// //               setQrCodeUrl(url)
// //               // Automatically start verification process after QR code is generated
// //               handleVerify()
// //             })
// //             .catch(err => {
// //               console.error(err)
// //               setError("Failed to generate QR code")
// //             })
// //         }
// //       }
// //     } catch (error) {
// //       console.error("Error:", error)
// //       setError(error instanceof Error ? error.message : "Failed to start verification")
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const fetchVerifiedData = async (): Promise<VerifiedData | null> => {
// //     if (!proofRequestId) return null
    
// //     try {
// //       const response = await fetch(
// //         `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
// //       )
// //       if (!response.ok) throw new Error("Failed to fetch verification record")

// //       const data = await response.json()
// //       const credentialSubject =
// //         data.record.presentation.presentationExchange.verifiableCredential[0]
// //           .credentialSubject

// //       return {
// //         fullName: credentialSubject['Full Name'],
// //         dateOfBirth: credentialSubject['Date of Birth'],
// //         gender: credentialSubject.Gender,
// //         citizenship: credentialSubject.Citizenship
// //       }
// //     } catch (error) {
// //       console.error("Error fetching verified data:", error)
// //       setError("Failed to fetch verified data")
// //       return null
// //     }
// //   }

// //   // Simulate verification process (like in your simpler example)
// //   const handleVerify = () => {
// //     setIsVerifying(true)
// //     // The actual verification happens through polling, so we don't need setTimeout here
// //     // The polling useEffect will handle the actual verification flow
// //   }

// //   useEffect(() => {
// //     if (!proofRequestId) {
// //       handleSubmit()
// //     }
// //   }, [])

// //   useEffect(() => {
// //     if (!proofRequestId) return

// //     let pollingInterval: NodeJS.Timeout
// //     let timeout: NodeJS.Timeout

// //     const fetchProofStatus = async () => {
// //       try {
// //         const res = await fetch(
// //           `http://localhost:6001/api/proof/proof-record/${proofRequestId}`
// //         )
        
// //         if (!res.ok) {
// //           throw new Error(`HTTP error! status: ${res.status}`)
// //         }

// //         const data = await res.json()

// //         if (data.success) {
// //           console.log("Current state:", data.record.state)

// //           if (data.record.state === "done") {
// //             setIsVerified(true)
// //             setIsPolling(false)
// //             const verifiedData = await fetchVerifiedData()
            
// //             if (verifiedData) {
// //               onVerificationComplete(verifiedData)
// //             } else {
// //               setError("Failed to extract verified data")
// //             }
            
// //             // Clean up
// //             clearInterval(pollingInterval)
// //             clearTimeout(timeout)
// //           }
// //         }
// //       } catch (err) {
// //         console.error("Polling error:", err)
// //         setError("Verification process failed")
// //         setIsPolling(false)
// //         clearInterval(pollingInterval)
// //         clearTimeout(timeout)
// //       }
// //     }

// //     // Start polling only if we're verifying
// //     if (isVerifying) {
// //       setIsPolling(true)
// //       pollingInterval = setInterval(fetchProofStatus, 2000)
      
// //       // Add timeout to prevent infinite polling (5 minutes max)
// //       timeout = setTimeout(() => {
// //         clearInterval(pollingInterval)
// //         setIsPolling(false)
// //         setError("Verification timed out. Please try again.")
// //       }, 300000) // 5 minutes
// //     }

// //     return () => {
// //       clearInterval(pollingInterval)
// //       clearTimeout(timeout)
// //     }
// //   }, [proofRequestId, isVerifying])

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader>
// //           <div className="flex items-center gap-2 mb-2">
// //             <Button variant="ghost" size="sm" onClick={onBack}>
// //               <ArrowLeft className="w-4 h-4" />
// //             </Button>
// //             <div>
// //               <CardTitle>National ID Verification</CardTitle>
// //               <CardDescription>Verify your identity to book tickets</CardDescription>
// //             </div>
// //           </div>
// //         </CardHeader>

// //         <CardContent className="space-y-6">
// //           <div className="text-center">
// //             <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
// //             <p className="text-sm text-gray-600 mb-4">
// //               Scan the QR code with your National ID app to verify your identity
// //             </p>
// //           </div>

// //           {error && (
// //             <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
// //               {error}
// //             </div>
// //           )}

// //           <div className="flex flex-col items-center gap-4">
// //             {qrCodeUrl ? (
// //               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
// //                 <img src={qrCodeUrl} alt="QR Code for verification" className="w-48 h-48" />
// //               </div>
// //             ) : (
// //               <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
// //                 {isLoading ? (
// //                   <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
// //                 ) : (
// //                   <span className="text-gray-400">QR Code will appear here</span>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-center">
// //             {(isPolling || isVerifying) && (
// //               <div className="flex items-center justify-center gap-2 text-blue-600">
// //                 <Loader2 className="w-5 h-5 animate-spin" />
// //                 <span>Verifying your identity...</span>
// //               </div>
// //             )}

// //             {isVerified && (
// //               <div className="flex items-center justify-center gap-2 text-green-600">
// //                 <CheckCircle className="w-5 h-5" />
// //                 <span>Verification successful! Redirecting...</span>
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-xs text-gray-500 text-center">
// //             <p>Your personal information is encrypted and secure</p>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }

// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
// // import QRCode from "qrcode"

// // interface VerifiedData {
// //   fullName: string
// //   dateOfBirth: string
// //   gender: string
// //   citizenship: string
// // }

// // interface QRVerificationProps {
// //   event: any
// //   onVerificationComplete: (verifiedData: VerifiedData) => void
// //   onBack: () => void
// // }

// // export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
// //   const [qrCodeUrl, setQrCodeUrl] = useState("")
// //   const [isVerifying, setIsVerifying] = useState(false)
// //   const [isVerified, setIsVerified] = useState(false)
// //   const [proofRequestId, setProofRequestId] = useState<string | undefined>()
// //   const [isLoading, setIsLoading] = useState(false)
// //   const [isPolling, setIsPolling] = useState(false)
// //   const [error, setError] = useState<string | null>(null)
// //   const [isScanned, setIsScanned] = useState(false) // New state to track if QR was scanned

// //   const handleSubmit = async () => {
// //     if (proofRequestId) return;
    
// //     setIsLoading(true)
// //     setQrCodeUrl("")
// //     setError(null)
// //     setIsScanned(false) // Reset scanned state on new request
    
// //     const payload = {
// //       "protocolVersion": "v2",
// //       "proofFormats": {
// //         "presentationExchange": {
// //           "presentationDefinition": {
// //             "id": "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
// //             "input_descriptors": [
// //               {
// //                 "constraints": {
// //                   "fields": [
// //                     {
// //                       "path": [
// //                         "$.credentialSubject['Full Name']",
// //                         "$.credentialSubject['Date of Birth']",
// //                         "$.credentialSubject.Gender",
// //                         "$.credentialSubject.Citizenship"
// //                       ]
// //                     }
// //                   ]
// //                 },
// //                 "id": new Date().toISOString(),
// //                 "schema": [
// //                   {
// //                     "uri": "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
// //                   }
// //                 ]
// //               }
// //             ]
// //           }
// //         }
// //       }
// //     }

// //     try {
// //       const response = await fetch(
// //         "http://localhost:6001/api/proof/request-proof",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(payload),
// //         }
// //       )

// //       if (!response.ok) {
// //         const errorData = await response.json()
// //         throw new Error(errorData.error || "Request failed")
// //       }

// //       const result = await response.json()
// //       if (result.success) {
// //         setProofRequestId(result.proofRequestId)
        
// //         if (result.invitation) {
// //           QRCode.toDataURL(result.invitation)
// //             .then(url => setQrCodeUrl(url))
// //             .catch(err => {
// //               console.error(err)
// //               setError("Failed to generate QR code")
// //             })
// //         }
// //       }
// //     } catch (error) {
// //       console.error("Error:", error)
// //       setError(error instanceof Error ? error.message : "Failed to start verification")
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const fetchVerifiedData = async (): Promise<VerifiedData | null> => {
// //     if (!proofRequestId) return null
    
// //     try {
// //       const response = await fetch(
// //         `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
// //       )
// //       if (!response.ok) throw new Error("Failed to fetch verification record")

// //       const data = await response.json()
// //       const credentialSubject =
// //         data.record.presentation.presentationExchange.verifiableCredential[0]
// //           .credentialSubject

// //       return {
// //         fullName: credentialSubject['Full Name'],
// //         dateOfBirth: credentialSubject['Date of Birth'],
// //         gender: credentialSubject.Gender,
// //         citizenship: credentialSubject.Citizenship
// //       }
// //     } catch (error) {
// //       console.error("Error fetching verified data:", error)
// //       setError("Failed to fetch verified data")
// //       return null
// //     }
// //   }

// //   // Start verification process after scan
// //   const handleVerify = () => {
// //     if (!proofRequestId || isVerifying) return;
    
// //     setIsScanned(true)
// //     setIsVerifying(true)
// //   }

// //   useEffect(() => {
// //     if (!proofRequestId) {
// //       handleSubmit()
// //     }
// //   }, [])

// //   useEffect(() => {
// //     if (!proofRequestId || !isScanned) return // Only start polling after scan

// //     let pollingInterval: NodeJS.Timeout
// //     let timeout: NodeJS.Timeout

// //     const fetchProofStatus = async () => {
// //       try {
// //         const res = await fetch(
// //           `http://localhost:6001/api/proof/proof-record/${proofRequestId}`
// //         )
        
// //         if (!res.ok) {
// //           throw new Error(`HTTP error! status: ${res.status}`)
// //         }

// //         const data = await res.json()

// //         if (data.success) {
// //           console.log("Current state:", data.record.state)

// //           if (data.record.state === "done") {
// //             setIsVerified(true)
// //             setIsPolling(false)
// //             const verifiedData = await fetchVerifiedData()
            
// //             if (verifiedData) {
// //               onVerificationComplete(verifiedData)
// //             } else {
// //               setError("Failed to extract verified data")
// //             }
            
// //             clearInterval(pollingInterval)
// //             clearTimeout(timeout)
// //           }
// //         }
// //       } catch (err) {
// //         console.error("Polling error:", err)
// //         setError("Verification process failed")
// //         setIsPolling(false)
// //         clearInterval(pollingInterval)
// //         clearTimeout(timeout)
// //       }
// //     }

// //     // Start polling
// //     setIsPolling(true)
// //     pollingInterval = setInterval(fetchProofStatus, 2000)
    
// //     // Timeout after 5 minutes
// //     timeout = setTimeout(() => {
// //       clearInterval(pollingInterval)
// //       setIsPolling(false)
// //       setError("Verification timed out. Please try again.")
// //     }, 300000)

// //     return () => {
// //       clearInterval(pollingInterval)
// //       clearTimeout(timeout)
// //     }
// //   }, [proofRequestId, isScanned])

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader>
// //           <div className="flex items-center gap-2 mb-2">
// //             <Button variant="ghost" size="sm" onClick={onBack}>
// //               <ArrowLeft className="w-4 h-4" />
// //             </Button>
// //             <div>
// //               <CardTitle>National ID Verification</CardTitle>
// //               <CardDescription>Verify your identity to book tickets</CardDescription>
// //             </div>
// //           </div>
// //         </CardHeader>

// //         <CardContent className="space-y-6">
// //           <div className="text-center">
// //             <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
// //             <p className="text-sm text-gray-600 mb-4">
// //               {!isScanned 
// //                 ? "Scan the QR code with your National ID app"
// //                 : "Complete verification in your National ID app"}
// //             </p>
// //           </div>

// //           {error && (
// //             <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
// //               {error}
// //             </div>
// //           )}

// //           <div className="flex flex-col items-center gap-4">
// //             {qrCodeUrl ? (
// //               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
// //                 <img src={qrCodeUrl} alt="QR Code for verification" className="w-48 h-48" />
// //               </div>
// //             ) : (
// //               <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
// //                 {isLoading ? (
// //                   <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
// //                 ) : (
// //                   <span className="text-gray-400">QR Code will appear here</span>
// //                 )}
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-center">
// //             {!isScanned && qrCodeUrl && (
// //               <Button 
// //                 onClick={handleVerify}
// //                 className="w-full"
// //                 disabled={isLoading}
// //               >
// //                 I've scanned the QR code
// //               </Button>
// //             )}

// //             {(isPolling || isVerifying) && !isVerified && (
// //               <div className="flex items-center justify-center gap-2 text-blue-600">
// //                 <Loader2 className="w-5 h-5 animate-spin" />
// //                 <span>Verifying your identity...</span>
// //               </div>
// //             )}

// //             {isVerified && (
// //               <div className="flex items-center justify-center gap-2 text-green-600">
// //                 <CheckCircle className="w-5 h-5" />
// //                 <span>Verification successful! Redirecting...</span>
// //               </div>
// //             )}
// //           </div>

// //           <div className="text-xs text-gray-500 text-center">
// //             <p>Your personal information is encrypted and secure</p>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }
// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card"
// import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
// import QRCode from "qrcode"

// interface VerifiedData {
//   fullName: string
//   dateOfBirth: string
//   gender: string
//   citizenship: string
// }

// interface QRVerificationProps {
//   event: any
//   onVerificationComplete: (verifiedData: VerifiedData) => void
//   onBack: () => void
// }

// export default function QRCodeVerification({
//   event,
//   onVerificationComplete,
//   onBack
// }: QRVerificationProps) {
//   const [qrCodeUrl, setQrCodeUrl] = useState("")
//   const [isVerifying, setIsVerifying] = useState(false)
//   const [isVerified, setIsVerified] = useState(false)
//   const [proofRequestId, setProofRequestId] = useState<string | undefined>()
//   const [isLoading, setIsLoading] = useState(false)
//   const [isPolling, setIsPolling] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async () => {
//     if (proofRequestId) return

//     setIsLoading(true)
//     setQrCodeUrl("")
//     setError(null)

//     const payload = {
//       protocolVersion: "v2",
//       proofFormats: {
//         presentationExchange: {
//           presentationDefinition: {
//             id: "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
//             input_descriptors: [
//               {
//                 constraints: {
//                   fields: [
//                     {
//                       path: [
//                         "$.credentialSubject['Full Name']",
//                         "$.credentialSubject['Date of Birth']",
//                         "$.credentialSubject.Gender",
//                         "$.credentialSubject.Citizenship"
//                       ]
//                     }
//                   ]
//                 },
//                 id: new Date().toISOString(),
//                 schema: [
//                   {
//                     uri: "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
//                   }
//                 ]
//               }
//             ]
//           }
//         }
//       }
//     }

//     try {
//       const response = await fetch(
//         "http://localhost:6001/api/proof/request-proof",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(payload)
//         }
//       )

//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.error || "Request failed")
//       }

//       const result = await response.json()
//       if (result.success) {
//         setProofRequestId(result.proofRequestId)

//         if (result.invitation) {
//           QRCode.toDataURL(result.invitation)
//             .then((url) => {
//               setQrCodeUrl(url)
//               setIsVerifying(true) // ✅ Automatically start verification
//             })
//             .catch((err) => {
//               console.error(err)
//               setError("Failed to generate QR code")
//             })
//         }
//       }
//     } catch (error) {
//       console.error("Error:", error)
//       setError(
//         error instanceof Error ? error.message : "Failed to start verification"
//       )
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const fetchVerifiedData = async (): Promise<VerifiedData | null> => {
//     if (!proofRequestId) return null

//     try {
//       const response = await fetch(
//         `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
//       )
//       if (!response.ok) throw new Error("Failed to fetch verification record")

//       const data = await response.json()
//       const credentialSubject =
//         data.record.presentation.presentationExchange.verifiableCredential[0]
//           .credentialSubject

//       return {
//         fullName: credentialSubject["Full Name"],
//         dateOfBirth: credentialSubject["Date of Birth"],
//         gender: credentialSubject.Gender,
//         citizenship: credentialSubject.Citizenship
//       }
//     } catch (error) {
//       console.error("Error fetching verified data:", error)
//       setError("Failed to fetch verified data")
//       return null
//     }
//   }

//   // ⏱️ Automatically start proof polling
//   useEffect(() => {
//     if (!proofRequestId || !isVerifying) return

//     let pollingInterval: NodeJS.Timeout
//     let timeout: NodeJS.Timeout

//     const fetchProofStatus = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:6001/api/proof/proof-record/${proofRequestId}`
//         )

//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

//         const data = await res.json()

//         if (data.success) {
//           console.log("Current state:", data.record.state)

//           if (data.record.state === "done") {
//             setIsVerified(true)
//             setIsPolling(false)

//             const verifiedData = await fetchVerifiedData()
//             if (verifiedData) {
//               onVerificationComplete(verifiedData)
//             } else {
//               setError("Failed to extract verified data")
//             }

//             clearInterval(pollingInterval)
//             clearTimeout(timeout)
//           }
//         }
//       } catch (err) {
//         console.error("Polling error:", err)
//         setError("Verification process failed")
//         setIsPolling(false)
//         clearInterval(pollingInterval)
//         clearTimeout(timeout)
//       }
//     }

//     setIsPolling(true)
//     pollingInterval = setInterval(fetchProofStatus, 2000)

//     timeout = setTimeout(() => {
//       clearInterval(pollingInterval)
//       setIsPolling(false)
//       setError("Verification timed out. Please try again.")
//     }, 300000)

//     return () => {
//       clearInterval(pollingInterval)
//       clearTimeout(timeout)
//     }
//   }, [proofRequestId, isVerifying])

//   // ⏳ Start process on mount
//   useEffect(() => {
//     if (!proofRequestId) {
//       handleSubmit()
//     }
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <div className="flex items-center gap-2 mb-2">
//             <Button variant="ghost" size="sm" onClick={onBack}>
//               <ArrowLeft className="w-4 h-4" />
//             </Button>
//             <div>
//               <CardTitle>National ID Verification</CardTitle>
//               <CardDescription>
//                 Verify your identity to book tickets
//               </CardDescription>
//             </div>
//           </div>
//         </CardHeader>

//         <CardContent className="space-y-6">
//           <div className="text-center">
//             <h3 className="font-semibold mb-2">Booking for: {event.title}</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               {isVerifying
//                 ? "Verifying your identity..."
//                 : "Scan the QR code with your National ID app"}
//             </p>
//           </div>

//           {error && (
//             <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
//               {error}
//             </div>
//           )}

//           <div className="flex flex-col items-center gap-4">
//             {qrCodeUrl ? (
//               <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
//                 <img
//                   src={qrCodeUrl}
//                   alt="QR Code for verification"
//                   className="w-48 h-48"
//                 />
//               </div>
//             ) : (
//               <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
//                 {isLoading ? (
//                   <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
//                 ) : (
//                   <span className="text-gray-400">
//                     QR Code will appear here
//                   </span>
//                 )}
//               </div>
//             )}
//           </div>

//           <div className="text-center">
//             {(isPolling || isVerifying) && !isVerified && (
//               <div className="flex items-center justify-center gap-2 text-blue-600">
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 <span>Verifying your identity...</span>
//               </div>
//             )}

//             {isVerified && (
//               <div className="flex items-center justify-center gap-2 text-green-600">
//                 <CheckCircle className="w-5 h-5" />
//                 <span>Verification successful! Redirecting...</span>
//               </div>
//             )}
//           </div>

//           <div className="text-xs text-gray-500 text-center">
//             <p>Your personal information is encrypted and secure</p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react"
import QRCode from "qrcode"

interface VerifiedData {
  fullName: string
  dateOfBirth: string
  gender: string
  citizenship: string
}

interface QRVerificationProps {
  event: any
  onVerificationComplete: (verifiedData: VerifiedData) => void
  onBack: () => void
}

export default function QRCodeVerification({ event, onVerificationComplete, onBack }: QRVerificationProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [proofRequestId, setProofRequestId] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [isPolling, setIsPolling] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (proofRequestId) return;
    
    setIsLoading(true)
    setQrCodeUrl("")
    setError(null)
    
    const payload = {
      "protocolVersion": "v2",
      "proofFormats": {
        "presentationExchange": {
          "presentationDefinition": {
            "id": "d75c8b3c-ba4b-488a-bc62-f7bf5d4cd7ad",
            "input_descriptors": [
              {
                "constraints": {
                  "fields": [
                    {
                      "path": [
                        "$.credentialSubject['Full Name']",
                        "$.credentialSubject['Date of Birth']",
                        "$.credentialSubject.Gender",
                        "$.credentialSubject.Citizenship"
                      ]
                    }
                  ]
                },
                "id": new Date().toISOString(),
                "schema": [
                  {
                    "uri": "https://dev-schema.ngotag.com/schemas/c7952a0a-e9b5-4a4b-a714-1e5d0a1ae076"
                  }
                ]
              }
            ]
          }
        }
      }
    }

    try {
      const response = await fetch(
        "http://localhost:6001/api/proof/request-proof",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Request failed")
      }

      const result = await response.json()
      if (result.success) {
        setProofRequestId(result.proofRequestId)
        
        if (result.invitation) {
          QRCode.toDataURL(result.invitation)
            .then(url => {
              setQrCodeUrl(url)
              setIsVerifying(true) // Start verifying as soon as QR is displayed
            })
            .catch(err => {
              console.error(err)
              setError("Failed to generate QR code")
            })
        }
      }
    } catch (error) {
      console.error("Error:", error)
      setError(error instanceof Error ? error.message : "Failed to start verification")
    } finally {
      setIsLoading(false)
    }
  }

  const fetchVerifiedData = async (): Promise<VerifiedData | null> => {
    if (!proofRequestId) return null
    
    try {
      const response = await fetch(
        `http://localhost:6001/api/proof/proof-record-data/${proofRequestId}`
      )
      if (!response.ok) throw new Error("Failed to fetch verification record")

      const data = await response.json()
      const credentialSubject =
        data.record.presentation.presentationExchange.verifiableCredential[0]
          .credentialSubject

      return {
        fullName: credentialSubject['Full Name'],
        dateOfBirth: credentialSubject['Date of Birth'],
        gender: credentialSubject.Gender,
        citizenship: credentialSubject.Citizenship
      }
    } catch (error) {
      console.error("Error fetching verified data:", error)
      setError("Failed to fetch verified data")
      return null
    }
  }

  useEffect(() => {
    if (!proofRequestId) {
      handleSubmit()
    }
  }, [])

  useEffect(() => {
    if (!proofRequestId || !isVerifying) return // Only poll when verifying

    let pollingInterval: NodeJS.Timeout
    let timeout: NodeJS.Timeout

    const fetchProofStatus = async () => {
      try {
        const res = await fetch(
          `http://localhost:6001/api/proof/proof-record/${proofRequestId}`
        )
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }

        const data = await res.json()

        if (data.success) {
          console.log("Current state:", data.record.state)

          if (data.record.state === "done") {
            setIsVerified(true)
            setIsPolling(false)
            const verifiedData = await fetchVerifiedData()
            
            if (verifiedData) {
              onVerificationComplete(verifiedData)
            } else {
              setError("Failed to extract verified data")
            }
            
            clearInterval(pollingInterval)
            clearTimeout(timeout)
          }
        }
      } catch (err) {
        console.error("Polling error:", err)
        setError("Verification process failed")
        setIsPolling(false)
        clearInterval(pollingInterval)
        clearTimeout(timeout)
      }
    }

    // Start polling immediately when verifying
    setIsPolling(true)
    pollingInterval = setInterval(fetchProofStatus, 2000)
    
    // Timeout after 5 minutes
    timeout = setTimeout(() => {
      clearInterval(pollingInterval)
      setIsPolling(false)
      setError("Verification timed out. Please try again.")
    }, 300000)

    return () => {
      clearInterval(pollingInterval)
      clearTimeout(timeout)
    }
  }, [proofRequestId, isVerifying])

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
              {isVerified 
                ? "Verification complete!"
                : isVerifying
                ? "Complete verification in your National ID app"
                : "Scan the QR code with your National ID app"}
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
              {error}
            </div>
          )}

          <div className="flex flex-col items-center gap-4">
            {qrCodeUrl ? (
              <div className={`p-4 rounded-lg border-2 ${isVerified ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                <img src={qrCodeUrl} alt="QR Code for verification" className="w-48 h-48" />
              </div>
            ) : (
              <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-lg">
                {isLoading ? (
                  <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                ) : (
                  <span className="text-gray-400">QR Code will appear here</span>
                )}
              </div>
            )}
          </div>

          <div className="text-center">
            {/* {isVerifying && !isVerified && (
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Verifying your identity...</span>
              </div>
            )} */}

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
