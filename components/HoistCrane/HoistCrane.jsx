import Products from '@components/Products/Products'
import styles from './HoistCrane.module.css'
import Image from 'next/image'
import ImageContainer from '@components/ImageContainer'
import SafetyMeasure from '@public/why-img.jpg'
import CrossTravel from '@public/products-img/hoist-crane/cross-travel.jpeg'
import LongTravel from '@public/products-img/hoist-crane/long-travel.jpeg'
import ControlPanel from '@public/products-img/hoist-crane/control-panel.jpeg'
import { useState } from 'react'

const HoistCrane = ({data, category}) => {
    const [page, setPage] = useState(0)

return (
  <div className={`container ${styles.main}`} id="daftar">
      <h1 className="title">Produk Kami</h1>
      <p className={styles.introText}>
        Di dalam dunia Industri yang modern saat ini keberadaan Hoist Crane sebagai alat Material Handling pada pabrik, workshop, dan warehouse sangat dibutuhkan. Sebagai solusi Material Handling Equipment Hoist Crane sudah teruji dapat meningkatkan produktifitas, profitabilitas, dan keamanan kerja. Tim kami akan membantu Anda memilih jenis crane yang terbaik untuk pabrik, workshop atau warehouse Anda. Berikut adalah jenis-jenis crane yang kami sediakan.
      </p>
      <Products data={data} brands={[]} />
        <div>
            <ul className={styles.pagination}>
                <li style={{borderBottom: page === 0 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(0)}>
                    Safety Measure
                </li>
                <li style={{borderBottom: page === 1 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(1)}>
                    Cross Travel
                </li>
                <li style={{borderBottom: page === 2 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(2)}>
                    Long Travel
                </li>
                <li style={{borderBottom: page === 3 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(3)}>
                    Control Panel
                </li>
            </ul>
            <ul className={styles.container}>
                <li className={styles.safetyMeasure} style={{opacity: page === 0 ? '1' : '0', height: page === 0 ? 'max-content' : '0', visibility: page === 0 ? 'visible' :'hidden'}}>
                    <ImageContainer className={styles.storyImage} width={280} height={280}>
                        <Image src={SafetyMeasure} alt='' layout='fill' objectFit='cover' />
                    </ImageContainer>
                    <div>
                        <h2>Safety Measure</h2>
                        <p>Untuk standard keselamatan alat angkat dan angkut, kami membuat girder dengan perhitungan yang mengacu pada aturan Dinas Tenaga Kerja terkait yaitu dengan defleksi 1:800</p>
                    </div>
                </li>
                <li className={styles.crossTravel} style={{opacity: page === 1 ? '1' : '0', height: page === 1 ? 'max-content' : '0', visibility: page === 1 ? 'visible' :'hidden'}}>
                    <ImageContainer className={styles.storyImage} width={280} height={280}>
                        <Image src={CrossTravel} alt='' layout='fill' objectFit='cover' />
                    </ImageContainer>
                    <div>
                        <h2>Cross Travel</h2>
                        <p>Untuk power source dan kabel control cross travel kami menggunakan 2 system yaitu double festoon flat cable dan double festoon NYYHY cable</p>
                    </div>
                </li>
                <li className={styles.longTravel} style={{opacity: page === 2 ? '1' : '0', height: page === 2 ? 'max-content' : '0', visibility: page === 2 ? 'visible' :'hidden'}}>
                    <ImageContainer className={styles.storyImage} width={280} height={280}>
                        <Image src={LongTravel} alt='' layout='fill' objectFit='cover' />
                    </ImageContainer>
                    <div>
                        <h2>Long Travel</h2>
                        <p>Untuk kebutuhan power source long travel kami menggunakan power conductor 3-in-1. Kelebihan dari conductor ini adalah design lebih simple, pemasangan lebih cepat, maintenance mudah dan tentu saja Harga yang lebih kompetitif dan kualitas yang bagus</p>
                    </div>
                </li>
                <li className={styles.controlPanel} style={{opacity: page === 3 ? '1' : '0', height: page === 3 ? 'max-content' : '0', visibility: page === 3 ? 'visible' :'hidden'}}>
                    <ImageContainer className={styles.storyImage} width={400} height={450}>
                        <Image src={ControlPanel} alt='' layout='fill' objectFit='cover' />
                    </ImageContainer>
                    <div>
                        <h2>Control Panel</h2>
                        <p>Panel kontrol adalah pusat kendali dari seluruh sistem Derek. Untuk gerakan long stroke (pancaran depan ke belakang), kami menggunakan aplikasi Motor soft start system dengan keunggulan sebagai berikut: Konsumsi daya lebih hemat. keselamatan kerja. Meminimalkan goyangan Saat crane mulai bekerja di bawah beban, akan menyebabkan goyangan pada hook, membahayakan operator dan kargo itu sendiri karena akselerasi motor tanpa Motor soft start system akan  cepat dan tidak merata, menyebabkan goyangan. Dengan Motor soft start system, hal ini bisa diminimalisir karena start awal (akselerasi) crane menjadi sangat lunak sehingga kemungkinan goyangan lebih kecil. Kecepatan dapat disesuaikan Untuk proses manufaktur atau pemrosesan presisi tinggi (misalnya injection molding, pemasangan mesin turbin, dll). Panel kontrol ini juga dilengkapi dengan proteksi fasa yang diaktifkan jika  salah satu dari catu daya 380 V R, S, T gagal (kekurangan fasa) maka crane tidak dapat digunakan atau diaktifkan secara otomatis, hal ini dimaksudkan untuk mencegah keausan/kerusakan motor akibat untuk kehilangan daya fasa.</p>
                    </div>
                </li>
            </ul>
        </div>
  </div>
)
}

export default HoistCrane