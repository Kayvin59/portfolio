import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kayvin Ngueeping - Développeur Front-End React</title>
        <meta
          name="description"
          content="Je suis développeur front-end depuis plus de 6 ans. J'habite à Lille. Bienvenue sur mon site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} className="root" />{' '}
    </>
  )
}

export default MyApp
