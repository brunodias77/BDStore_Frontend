import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import './globals.css';
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
    <html lang="pt-BR">
      <body className={`bg-white ${myJetBrains_Mono.className}`}>
        <div className='flex flex-col min-h-screen md:min-h-[calc(100vh + 10rem)]'>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
