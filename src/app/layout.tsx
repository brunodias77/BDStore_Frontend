import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/website/Header';
import { Suspense } from 'react';
import Footer from '@/components/website/Footer';
import ModalProvider from '@/providers/modal-provider';

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
        {/* <ModalProvider /> */}
        <div className="flex flex-col min-h-screen md:min-h-[calc(100vh + 10rem)]">
          <Header />
          <Suspense>
            <main className="flex-1">
              {children}
            </main>
          </Suspense>
          <Footer />
        </div>
      </body>
    </html>
  )
}
