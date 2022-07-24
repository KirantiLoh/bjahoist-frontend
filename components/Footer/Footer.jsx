import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Footer = () => {


  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.links}>
        <ul className={styles.address}>
          <h3>Bintang Jaya Abadi</h3>
          <p>Jln Kapuk Raya No 15 RT 10 RW 01 Kec. Cengkareng, Jakarta Barat 11720</p>
        </ul>
        <ul>
          <h3>Products</h3>
          <li>
            <Link href='/products/hoist-cranes'>
              <a>Hoist Crane</a>
            </Link>
          </li>
          <li>
            <Link href='/products/cargo-lifts'>
              <a>Cargo Lift</a>
            </Link>
          </li>
          <li>
            <Link href='/products/chain-hoists'>
              <a>Chain Hoist</a>
            </Link>
          </li>
          <li>
            <Link href='/products/wire-rope-hoists'>
              <a>Wire Rope Hoist</a>
            </Link>
          </li>
          <li>
            <Link href='/products/parts-and-accessories'>
              <a>Parts and Accessories</a>
            </Link>
          </li>
        </ul>
        <ul>
            <h3>Kontak kami</h3>
            <li>
              <FontAwesomeIcon icon={faPhone}/> Telpon : 087886721612
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp}/> Whatsapp :  <a href='https://wa.me/6287886721612'>087886721612</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe}/> Website :  <Link href='/'><a>bjahoist.com</a></Link>
            </li>
        </ul>
        </div>
        </div>
        <div className={styles.small}>
        <small>© Copyright PT. Bintang Jaya Abadi {(new Date()).getFullYear()} | All Rights Reserved</small>
        <small>Developed by Maurice Yang</small>
        </div>
    </footer>
  )
}

export default Footer