import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/global.css'
import { Metadata } from 'next'
import React from 'react'
import { abril_fatface, playfair_display } from './fonts'

export const metadata: Metadata = {
  title: 'Kayvin Ngueeping - Front-End Developer React',
  description:
    'Portfolio of Kayvin, a passionate front-end developer. Welcome to my site',
  openGraph: {
    title: 'Kayvin Ngueeping - Développeur Front-End React',
    description:
      'Portfolio of Kayvin, a passionate front-end developer. Welcome to my site',
    type: 'website',
    siteName: 'Kayvin Ngueeping',
    locale: 'fr_FR',
    url: 'https://www.kayvin.fr/'
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abril_fatface.variable} ${playfair_display.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
