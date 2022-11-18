import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kayvin Ngueeping - Développeur Front-End React</title>
        <meta
          name="description"
          content="Je suis développeur front-end depuis plus de 6 ans. J'habite à Lille. Bienvenue sur mon site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} className="root" />{' '}
    </>
  )
}

export default MyApp
