import { useState } from 'react'
import styles from './AboutUs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt, faTools, faThumbsUp, faHandshakeSimple, faElevator, faBuilding, faTowerObservation, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import AboutImage1 from '@public/why-img.jpg'
import Image from 'next/image'
import ImageContainer from '@components/ImageContainer'

const AboutUs = () => {

    const [page, setPage] = useState(0)

    return (
        <div className={styles.about}>
            <h1 className='title'>Tentang Kami</h1>
            <ul className={styles.pagination}>
                <li style={{borderBottom: page === 0 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(0)}>Cerita kami</li>
                <li style={{borderBottom: page === 1 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(1)}>Visi & Misi</li>
                <li style={{borderBottom: page === 2 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(2)}>Jasa</li>
                <li style={{borderBottom: page === 3 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(3)}>Mengapa kami</li>
            </ul>
            <div className={styles.container}>
            <div className={styles.story} style={{opacity: page === 0 ? '1' : '0', height: page === 0 ? 'max-content' : '0', visibility: page === 0 ? 'visible' :'hidden'}}>
                <ImageContainer className={styles.storyImage} width={280} height={500}>
                    <Image src={AboutImage1} alt='' layout='fill' objectFit='cover' />
                </ImageContainer>
                <div className={styles.description}>
                    <h2>Melayani jasa service serta instalasi electrical hoist</h2>
                    <p>
                      BJA Hoist adalah perusahaan mesin yang menyediakan mesin terbaik yang sesuai dengan kebutuhan Anda, menyediakan peralatan seperti hoist crane, cargo lift, chain hoist, dll untuk memudahkan pekerjaan Anda dan mengurangi biaya overhead. Kami bangga dalam memberikan layanan berkualitas yang dapat Anda percaya. BJA Hoist selalu ada di sini 24/7 dan memiliki staf yang terlatih, profesional, dan pekerja keras yang berdedikasi untuk menyediakan layanan pelanggan terbaik.
                    </p>
                    <p>
                      BJA Hoist dapat menawarkan solusi untuk semua kebutuhan pengangkatan Anda dari kebutuhan terkecil sehari-hari seperti pengiriman produk atau pengiriman hingga proyek konstruksi skala besar, BJA Hoist menyediakan berbagai macam peralatan untuk memenuhi kebutuhan dunia saat ini. Belum pernah ada perusahaan yang dapat menawarkan begitu banyak pilihan mesin dan peralatan untuk industri, memenuhi semua kebutuhan pengangkatan Anda dan menawarkan solusi untuk masalah pengangkatan apa pun.
                    </p>
                </div>
            </div>
            <div className={styles.visiMisi} style={{opacity: page === 1 ? '1' : '0', height: page === 1 ? 'max-content' : '0', visibility: page === 1 ? 'visible' :'hidden'}}>
                <div className={styles.visi}>
                    <h2>Visi</h2>
                    <p>Menjadi perusahaan konstruksi terbaik di Indonesia yang terpercaya & dapat diandalkan dengan pengembangan sumber daya manusia, manajemen teknologi & tata kelola perusahaan yang baik.</p>
                </div>
                <div className={styles.misi}>
                <h2>Misi</h2>
                    <p>Berpartisipasi dalam Pembangunan Melalui Jasa Konstruksi</p>
                    <p>Menyediakan Jasa Konstruksi yang Dapat Memberikan Nilai Tambah Bagi Stakeholder</p>
                    <p>Memberikan Pelayanan Dengan Sikap Profesional dan Memenuhi Standar Kesehatan, Keselamatan Kerja dan Lindungan Lingkungan</p>
                    <p>Meningkatkan pelatihan SDM untuk menghasilkan tenaga kerja yang berkualitas dan menciptakan lingkungan kerja yang kondusif, serta menyediakan lapangan kerja yang luas</p>
                </div>
            </div>
            <div style={{opacity: page === 2 ? '1' : '0', height: page === 2 ? 'max-content' : '0', visibility: page === 2 ? 'visible' :'hidden'}} className={styles.services}> 
                <ul>
                  <li>
                    <h1><FontAwesomeIcon icon={faBuilding} /></h1>
                    <h2>
                    Konstruksi baja & bangunan
                    </h2>
                  </li>
                  <li>
                    <h1><FontAwesomeIcon icon={faTowerObservation} /></h1>
                    <h2>
                    Konstruksi hoist
                    </h2>
                  </li>
                  <li>
                    <h1><FontAwesomeIcon icon={faElevator} /></h1>
                    <h2>
                    Pembuatan lift barang
                    </h2>
                  </li>
                  <li>
                    <h1><FontAwesomeIcon icon={faMoneyBillTransfer} /></h1>
                    <h2>
                    Penjualan hoist & spare part
                    </h2>
                  </li>
                </ul>
            </div>
            <ul className={styles.why} style={{opacity: page === 3 ? '1' : '0', height: page === 3 ? 'max-content' : '0', visibility: page === 3 ? 'visible' :'hidden'}}>
              <li>
                <h1>
                  <FontAwesomeIcon icon={faHeadphonesAlt}/>
                </h1>
                <h2>Customer Support baik</h2>
                <p>Pelanggan kami adalah alasan mengapa kami ada. Kami ingin memberi Anda pengalaman terbaik, dan kami percaya bahwa layanan pelanggan yang hebat adalah inti dari ini.</p>
              </li>
              <li>
                <h1>
                  <FontAwesomeIcon icon={faThumbsUp}/>
                </h1>
                <h2>Kualitas terbaik</h2>
                <p>Kami menyediakan produk dengan kualitas terbaik dan memastikan bahwa pelanggan kami memiliki pengalaman terbaik bersama kami.</p>
              </li>
              <li>
                <h1>
                  <FontAwesomeIcon icon={faHandshakeSimple}/>
                </h1>
                <h2>Terpercaya</h2>
                <p>Kami adalah perusahaan yang dipercaya oleh banyak orang dan menyediakan produk dan layanan berkualitas tinggi. Kami  bekerja keras untuk mendapatkan kepercayaan ini dan  bangga  berdiri di belakang pekerjaan kami.</p>
              </li>
              <li>
                <h1>
                  <FontAwesomeIcon icon={faTools}/>
                </h1>
                <h2>Staf terlatih</h2>
                <p>Karyawan kami terlatih dan berpengalaman. Mereka dipilih dan dilatih dengan cermat untuk mencapai layanan dengan kualitas  terbaik.</p>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default AboutUs
