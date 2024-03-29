import './globals.css'
import type { Metadata } from 'next'

import { Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
