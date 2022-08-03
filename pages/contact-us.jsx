import { useEffect, useRef, useState } from 'react'
import { Loader } from 'google-maps'
import ContactBg from 'public/why-img.jpg'
import Image from 'next/image'
import styles from '@styles/ContactUs.module.css'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'
import Head from 'next/head'

const ContactUsPage = () => {
    const mapRef = useRef()
    const recaptchaRef = useRef()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [recaptcha, setRecaptcha] = useState('')
    const [modalMessage, setModalMessage] = useState('')
    const [showModal, setShowModal] = useState(true)

    const handleSubmit = (e) => {
      e.preventDefault()
      let params = {
        name,
        email,
        subject,
        message,
        'g-recaptcha-response': recaptcha
      }
      emailjs.send('service_bjahoist', 'template_bjahoist', params, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then(result => {
        setModalMessage('Terimakasih sudah menghubungi kami')
      })
      .catch(err => {
        setModalMessage('Terjadi masalah saat pengiriman, silahkan coba lagi')
      })
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setRecaptcha('')
      recaptchaRef.current.reset()
    }

    useEffect(() => {
      const loader = new Loader(process.env.NEXT_PUBLIC_MAPS_API_KEY);
  
      loader.load().then(function (google) {
        let map = new google.maps.Map(mapRef.current, {
            center: {lat: -6.140827386475561, lng:  106.76926098369279},
            zoom: 15,
        });
        let marker = new google.maps.Marker({
          position: {lat: -6.140827386475561, lng:  106.76926098369279},
          map: map,
          title: "BJA Hoist"
        })
      });
    }, [])

  return (
    <div className={`page ${styles.contactPage}`}>
      <Head>
        <title>Hubungi BJA Hoist | Melayani jasa service hoist crane dan system electrical hoist crane serta pemasangan instalasi electrical hoist crane</title>
        <meta name="description" content="BJA Hoist / bjahoist (Bintang Jaya Abadi) melayani jasa service hoist crane dan system electrical hoist crane, pemasangan instalasi electrical hoist crane, pembuatan cargo lift / lift barang, serta penjualan hoist crane,chain hoist, wire rope hoist, dan bagian atau aksesoris hoist" />
        <meta name="google-site-verification" content="US3IM2SRg6OsimW5O8gtDI0TWPnf9rCFEvPbEeoXPGI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bjahoist.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name='keyword' content='bjahoist, bja hoist, hoist, chain hoist, wire rope hoist, jual hoist second, hoist second, cargo lift, bintang jaya abadi, jual hoist murah, lift barang, beli hoist baru, hoist baru, servis hoist, servis hoist rusak, hoist crane, hitachi, nitchi, kito, jual hoist murah, hoist murah, hoist hitachi, hoist nitchi, hoist kito'/>
      </Head>
        <Image style={{filter: 'brightness(.6)'}} src={ContactBg} alt="" layout='fill' objectFit='cover'/>
        <div className={styles.contactContainer}> 
        <div>
        <div ref={mapRef} className={styles.maps}></div>
        </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <input value={name} onChange={e => setName(e.target.value)} required type="text" placeholder='Nama' /> 
            <input value={email} onChange={e => setEmail(e.target.value)} required type="email" placeholder='Email' />          
            <input value={subject} onChange={e => setSubject(e.target.value)} required type="text" placeholder='Subjek' />          
            <textarea value={message} onChange={e => setMessage(e.target.value)} required cols="30" rows="10"></textarea>
            <ReCAPTCHA style={{transform:"scale(0.75)", transformOrigin:"0 0"}} onExpired={() => recaptchaRef.current.reset()} ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={value => setRecaptcha(value)} />
            <button type="submit" className='primary-btn'>Kirim</button>
          </form>
        </div>
        <div style={{left: showModal ? '0' : '-100%'}} className={styles.modal}>{modalMessage}</div>
    </div>
    
  )
}

export default ContactUsPage