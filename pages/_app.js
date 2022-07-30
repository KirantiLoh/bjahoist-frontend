import '../styles/globals.css'
import Navbar from '../components/Navbar/Navbar'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from '@components/Footer/Footer'
import WhatsappBtn from '@components/WhatsappBtn/WhatsappBtn'
import axios from 'axios'
import { useState } from 'react'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

function MyApp({ Component, pageProps }) {

  const [navPos, setNavPos] = useState('absolute')
  const [showWhatsapp, setShowWhatsapp] = useState(false)

  if (typeof window !== 'undefined') {
      window.onscroll = () => {
          if (window.scrollY > 500) {
              setNavPos('fixed')
              setShowWhatsapp(true)
           } else {
              setNavPos('absolute')
              setShowWhatsapp(false)
           }
      } 
  }
  return (
    <>
      <Head>
        <title>BJA Hoist | Melayani jasa service hoist crane dan system electrical hoist crane serta pemasangan instalasi electrical hoist crane</title>
        <meta name="description" content="BJA Hoist / bjahoist (Bintang Jaya Abadi) melayani jasa service hoist crane dan system electrical hoist crane, pemasangan instalasi electrical hoist crane, pembuatan cargo lift / lift barang, serta penjualan hoist crane,chain hoist, wire rope hoist, dan bagian atau aksesoris hoist" />
        <meta name="google-site-verification" content="US3IM2SRg6OsimW5O8gtDI0TWPnf9rCFEvPbEeoXPGI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bjahoist.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name='keyword' content='bjahoist, bja hoist, hoist, chain hoist, wire rope hoist, jual hoist second, hoist second, cargo lift, bintang jaya abadi, jual hoist murah, lift barang, beli hoist baru, hoist baru, servis hoist, servis hoist rusak, hoist crane, hitachi, nitchi, kito, jual hoist murah, hoist murah, hoist hitachi, hoist nitchi, hoist kito'/>
      </Head>
      <div className="root">
        <Navbar navPos={navPos}/>
        <Component {...pageProps} />
        <WhatsappBtn show={showWhatsapp}/>
        <Footer/>
      </div>
    </>
  )
}

export default MyApp
