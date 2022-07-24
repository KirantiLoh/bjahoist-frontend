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
        <meta name="description" content="BJA Hoist (Bintang Jaya Abadi) melayani jasa service hoist crane dan system electrical hoist crane, pemasangan instalasi electrical hoist crane, pembuatan cargo lift / lift barang, serta penjualan hoist crane,chain hoist, wire rope hoist, dan bagian atau aksesoris hoist" />
        <link rel="icon" href="/favicon.ico" />
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
