import Image from 'next/image'
import Slider from '../components/Slider/Slider'
import styles from '../styles/Home.module.css'
import ChainHoistImage from '@public/chain-hoist.jpg'
import HoistCraneImage from '@public/hoist-crane.jpg'
import CargoLiftImage from '@public/cargo-lift.jpg'
import WireRopeHoistImage from '@public/wirerope-hoist.jpg'
import PartsAccesoriesImage from '@public/parts-accesories.jpg'
import Link from 'next/link'
import ChainHoistImage1 from '@public/chain-hoist.jpeg'
import WireRopeHoistImage1 from '@public/wirerope-hoist.jpeg'
import ProductsBg from "@public/products-bg.jpg"
import AboutUs from '@components/AboutUs/AboutUs'
import Head from 'next/head'

export default function Home() {

  const images = [HoistCraneImage, CargoLiftImage, ChainHoistImage, WireRopeHoistImage, PartsAccesoriesImage]


  return (
    <div className={styles.container}>
      <Head>
        <title>BJA Hoist | Melayani jasa service hoist crane dan system electrical hoist crane serta pemasangan instalasi electrical hoist crane</title>
        <meta name="description" content="BJA Hoist / bjahoist (Bintang Jaya Abadi) melayani jasa service hoist crane dan system electrical hoist crane, pemasangan instalasi electrical hoist crane, pembuatan cargo lift / lift barang, serta penjualan hoist crane,chain hoist, wire rope hoist, dan bagian atau aksesoris hoist" />
        <meta name="google-site-verification" content="US3IM2SRg6OsimW5O8gtDI0TWPnf9rCFEvPbEeoXPGI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bjahoist.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name='keyword' content='bjahoist, bja hoist, hoist, chain hoist, wire rope hoist, jual hoist second, hoist second, cargo lift, bintang jaya abadi, jual hoist murah, lift barang, beli hoist baru, hoist baru, servis hoist, servis hoist rusak, hoist crane, hitachi, nitchi, kito, jual hoist murah, hoist murah, hoist hitachi, hoist nitchi, hoist kito'/>
      </Head>
      <main className={styles.main}>
        <div className={styles.landing}>
        <Slider data={images}/>
          <div className={styles.intro}>
              <h1>Bintang Jaya Abadi</h1>
              <p>
              Melayani jasa service hoist crane dan system electrical hoist crane serta pemasangan instalasi electrical hoist crane
              </p>
              <a href="#products" className='primary-btn'>Pelajari lebih lanjut</a>
          </div>
        </div>
        <div id='tentang-kami' className='container'>
              <AboutUs />
        </div>
        <div className={`container ${styles.productsContainer}`} id="products">
          <div className={styles.productsOverlay}></div>
          <Image src={ProductsBg} alt="" layout='fill' objectFit='cover' />
          <div className={styles.productWhy}>
            <h1 className='title'>Produk Kami</h1>
            <p>
              Kami tidak  merekomendasikan produk yang kualitasnya tidak Anda yakini. Kami memahami bagaimana memperlakukan pelanggan kami. Hal ini karena kami percaya bahwa setiap rupiah yang Anda keluarkan adalah hasil  keringat dan usaha mereka yang menjadi tanggung jawab kami.
            </p>   
          </div>
            
        <ul className={styles.products}>
          <li>
          <Image className={styles.productImage} src={HoistCraneImage} width={200} height={300} objectFit='cover' alt="Hoist crane"/>
            <div className={styles.product}>
              <div className={styles.productDetail}>
                <div>
                    <h1>Hoist Crane</h1>
                    <p>
                        Pada industri modern saat ini, keberadaan hoisting crane sebagai alat bantu material handling di pabrik, bengkel dan gudang sangatlah penting. Terbukti meningkatkan produktivitas, profitabilitas, dan keselamatan kerja sebagai solusi lifting crane untuk truk industri. Tim kami dapat membantu Anda memilih jenis crane  terbaik untuk pabrik, bengkel, atau gudang Anda. Ini adalah jenis crane yang kami tawarkan.
                    </p>
                </div>
                <Link href='/products/hoist-cranes' as='/products/hoist-cranes'>
                    <a className='primary-btn'>Lihat Produk</a>
                  </Link>
              </div>
            </div>
          </li>
          <li>
          <Image className={styles.productImage} src={CargoLiftImage} width={200} height={300} objectFit='cover' alt="Cargo lift"/>
            <div className={styles.product}>
              <div className={styles.productDetail}> 
                <div>
                  <h1>Cargo Lift</h1>
                  <p>
                  Cargo Lift / Lift Barang adalah solusi  paling tepat untuk pemindahan material antar lantai (vertikal). Sebagai aturan umum, Cargo Lift / lift barang sangat cocok untuk digunakan di toko, gudang atau pabrik. Cargo Lift tidak hanya dapat dipasang di dalam ruangan tetapi juga dapat dipasang di luar ruangan. Penggunaannya juga sangat sederhana karena  dilengkapi dengan pengontrol otomatis di setiap lantai. Dari segi keamanan juga sangat terjamin karena terdapat Alat Pengaman / Safety Lock.
                  </p>
                </div> 
                <Link href='/products/cargo-lifts' as='/products/cargo-lifts'>
                    <a className='primary-btn'>Lihat Produk</a>
                  </Link>
              </div>
            </div>
          </li>
          <li>
          <Image className={styles.productImage} src={ChainHoistImage1} width={200} height={300} objectFit='cover' alt="Chain Hoist Hitachi made in Japan"/>
            <div className={styles.product}>
              <div className={styles.productDetail}>
                <div>
                    <h1>Chain Hoist</h1>
                    <p>
                    Chain Hoist Series adalah rangkaian kerekan rantai listrik berkualitas tinggi yang dirancang khusus untuk memenuhi tuntutan industri yang keras. Banyak fitur khusus tugas berat untuk meningkatkan efisiensi, keandalan, daya tahan, dan keamanan.
                    </p>
                </div>
                <Link href='/products/chain-hoists' as='/products/chain-hoists'>
                    <a className='primary-btn'>Lihat Produk</a>
                  </Link>
              </div>
            </div>
          </li>
          <li>
          <Image className={styles.productImage} src={WireRopeHoistImage1} width={200} height={300} objectFit='cover' alt="Wire rope hoist Nippon Hoist made in Japan"/>
            <div className={styles.product}>
              <div className={styles.productDetail}>
                <div>
                  <h1>Wire Rope Hoist</h1>
                    <p>
                        Wire rope hoist memiliki berbagai mekanisme keamanan dan mudah dirawat. Kegunaan dan keandalan telah jauh ditingkatkan dibanding sebelumnya
                    </p>  
                </div>
                <Link href='/products/wire-rope-hoists' as='/products/wire-rope-hoists'>
                    <a className='primary-btn'>Lihat Produk</a>
                  </Link>
              </div>
            </div>
          </li>
          <li>
          <Image className={styles.productImage} src={PartsAccesoriesImage} width={200} height={300} objectFit='cover' alt="Parts and accessories"/>
            <div className={styles.product}>
              <div className={styles.productDetail}>
                <div>
                    <h1>Parts and Accesories</h1>
                    <p>
                        Kami juga menyediakan berbagai macam parts dan aksesoris untuk pelengkap hoist crane, chain hoist, dll
                    </p>
                </div>

                <Link href='/products/parts-and-accessories' as='/products/parts-and-accessories'>
                  <a className='primary-btn'>Lihat Produk</a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        </div>
      </main>
    </div>
  )
}
