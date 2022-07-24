import { useEffect, useRef, useState } from 'react'
import { Loader } from 'google-maps'
import ImageContainer from '@components/ImageContainer'
import ContactBg from 'public/why-img.jpg'
import Image from 'next/image'
import styles from '@styles/ContactUs.module.css'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from '@emailjs/browser'

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