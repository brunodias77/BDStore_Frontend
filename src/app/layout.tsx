import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
const myJetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BD Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${myJetBrains_Mono.className}`}>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
