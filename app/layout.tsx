import { Metadata } from 'next'
import React from 'react'
import './global.scss'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default RootLayout
