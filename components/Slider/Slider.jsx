import { useEffect, useState, useRef } from 'react'
import styles from './Slider.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


const Slider = ({title, message, to, data}) => {

    const [index, setIndex] = useState(0)

    const timerRef = useRef(null)

    const resetTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    useEffect(() => {
        resetTimer()
        timerRef.current = setInterval(() => {
          setIndex(prevIndex => prevIndex === data.length - 1 ? 0 : prevIndex + 1)
        }, 5000);
        return () => resetTimer()
    }, [index, data.length])

  return (
    <div className={styles.sliderContainer}>
          <ul style={{transform: `translate3d(${-index*100}%, 0, 0)`}} className={styles.slider}>
            {data && data.length > 0 ?
            data.map((image, index) => {
              return (
              <li key={index} className={styles.slide}>
                <Image src={image} layout="fill" priority objectFit='cover' alt={`Slider background ${index}`}/>
              </li>)
            }) :
              null}
          </ul>
          {data && data.length > 1 ? 
          <ul className={styles.sliderBtn}>
            <li onClick={() => setIndex(prevIndex => prevIndex === 0 ? data.length - 1 : prevIndex - 1)}><FontAwesomeIcon icon={faArrowLeft}/></li>
            <li onClick={() => setIndex(prevIndex => prevIndex === data.length - 1 ? 0 : prevIndex + 1)}><FontAwesomeIcon icon={faArrowRight}/></li>
          </ul> : null}
          <ul className={styles.sliderDots}>
            {data && data.length > 1 ? 
            data.map((_, idx) => {
              return (
              <li key={idx} className={index === idx ? styles.sliderDotActive : styles.sliderDot} onClick={() => setIndex(idx)}></li>
            )}) : null}
          </ul>
    </div>
  )
}

export default Slider