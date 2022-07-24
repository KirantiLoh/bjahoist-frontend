import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import styles from './Pagination.module.css'

const Pagination = ({page, maxPage, link}) => {
    
    const router = useRouter()

  return (
    <ul className={styles.paginationContainer}>
        <li>
            <button className={styles.paginationBtn} disabled={page <= 1} onClick={() => router.push(`${link}?page=${page - 1}`)}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
        </li>
        <li>{page}</li>
        <li>
            <button className={styles.paginationBtn} disabled={page === maxPage} onClick={() => router.push(`${link}?page=${page + 1}`)}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        </li>
    </ul>
  )
}

export default Pagination