import '~/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faHouse, faNewspaper, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
library.add(fas,faHouse, faNewspaper, faCircleInfo)

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
