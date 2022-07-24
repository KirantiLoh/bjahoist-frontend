import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import styles from './WhatsappBtn.module.css'

const WhatsappBtn = ({show}) => {

  return (
    <a href='https://wa.me/6287886721612' target='blank' style={{bottom: show ? '10px' : '-100px'}} className={styles.whatsappBtn}>
        <FontAwesomeIcon icon={faWhatsapp}/>
    </a>
  )
}

export default WhatsappBtn