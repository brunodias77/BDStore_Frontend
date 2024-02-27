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
        <Header />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  )
}
