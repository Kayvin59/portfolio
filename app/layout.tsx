import { Metadata } from 'next'
import React from 'react'
import './global.scss'

export const metadata: Metadata = {
  title: 'Kayvin Ngueeping - Développeur Front-End React',
  description:
    "Je suis développeur front-end depuis 2016. J'habite à Lille. Bienvenue sur mon site",
  openGraph: {
    title: 'Kayvin Ngueeping - Développeur Front-End React',
    description:
      "Je suis développeur front-end depuis 2016. J'habite à Lille. Bienvenue sur mon site",
    type: 'website',
    siteName: 'Kayvin Ngueeping',
    locale: 'fr_FR',
    url: 'https://www.kayvin.fr/'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="fr">
    <body>{children}</body>
  </html>
)

export default RootLayout
