import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Bhutan Event Ticketing',
  description: 'Book tickets for events in Bhutan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation Bar */}
        <nav className="w-full border-b bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-blue-600">Bhutan Events</h1>
            </Link>
            <div className="space-x-2">
              <Link href="/">
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  Events
                </Button>
              </Link>
              <Link href="/verifier">
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  Verification
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  )
}