/* eslint-disable camelcase */
import { Abril_Fatface, Playfair_Display } from 'next/font/google'

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
})

export const abril_fatface = Abril_Fatface({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-abril-fatface'
})
