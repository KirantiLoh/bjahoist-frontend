import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Logo from '@public/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const Navbar = ({navPos}) => {
    const router = useRouter()

    const chkRef = useRef()

  return (
    <nav className={styles.navbar} style={{position: navPos, backgroundColor: navPos === 'fixed' ? 'var(--secondary-color)' : 'transparent'}}>
        <h1 className={styles.logo}>
            <Link href='/'>
                <a>
                    <Image src={Logo} alt="Logo BJA Hoist" width={50} height={50}/>
                    BJA Hoist
                </a>
            </Link>
        </h1>
        <input type="checkbox" ref={chkRef} id={styles['chk']}/>
        <ul className={styles.navlinks}>
            <li onClick={() => chkRef.current.click()}>
                <h1 className={styles.innerLogo}>
                    <Link href='/'>
                        <a>
                            <Image src={Logo} alt="Logo BJA Hoist" width={50} height={50}/>
                            BJA Hoist
                        </a>
                    </Link>
                </h1>
            </li>
            <li onClick={() => chkRef.current.click()}>
                <Link href="/#tentang-kami">
                    <a>About</a>
                </Link>
            </li>
            <li onClick={() => chkRef.current.click()}>
                <Link href="/#products">
                    <a>Products</a>
                </Link>
            </li>
            <li onClick={() => chkRef.current.click()}>
                <Link href="/contact-us">
                    <a className={styles.contactUsBtn}>Contact Us</a>
                </Link>
            </li>
            <li>
                <label htmlFor={styles['chk']} className={styles.hideNavbarBtn}>
                    <FontAwesomeIcon icon={faTimes}/>
                </label>
            </li>
        </ul>
        <label htmlFor={styles['chk']} className={styles.showNavbarBtn}>
            <FontAwesomeIcon icon={faBars}/>
        </label>
    </nav>
  )
}

export default Navbar 