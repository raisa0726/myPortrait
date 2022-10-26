import '~/styles/globals.scss'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
