import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/website/Header';
import { Suspense } from 'react';

const myJetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BD Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myJetBrains_Mono.className}>
        <Header />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
