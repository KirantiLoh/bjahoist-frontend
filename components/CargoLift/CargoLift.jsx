import Products from '@components/Products/Products'
import { useState } from 'react'
import styles from './CargoLift.module.css'
import ImageContainer from '@components/ImageContainer'
import MaterialImg from "@public/products-img/cargo-lift/material.jpg"
import RailImg from "@public/products-img/cargo-lift/rail.jpeg"
import ControlSystemImg from "@public/products-img/cargo-lift/control-panel.jpeg"
import Image from 'next/image'

const CargoLift = ({data, category}) => {
    const [page, setPage] = useState(0)

  return (
    <div className={`container ${styles.main}`} id="daftar">
        <h1 className="title">Produk Kami</h1>
        <p className={styles.introText}>Cargo Lift / lift barang adalah solusi yang paling cocok untuk memindahkan material antar lantai (vertikal). Pada umumnya lift barang / cargo lift sangat cocok digunakan di toko, gudang atau pabrik. Cargo lift tidak hanya dapat dipasang di dalam ruangan tetapi juga dapat dipasang di luar ruangan. Penggunaannya juga sangat sederhana karena dilengkapi dengan pengontrol otomatis di setiap lantai. Dari segi keamanan juga sangat terjamin karena terdapat alat pengaman / safetylLock.</p>
        <Products data={data} brands={[]} />
        <div>
            <ul className={styles.pagination}>
                <li style={{borderBottom: page === 0 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(0)}>
                    Material dan Bahan
                </li>
                <li style={{borderBottom: page === 1 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(1)}>
                    Rail dan Roda Sangkar
                </li>
                <li style={{borderBottom: page === 2 ? '4px var(--secondary-color) solid' : '4px transparent solid'}} onClick={() => setPage(2)}>
                    Control System
                </li>
            </ul>
            <ul className={styles.container}>
                <li className={styles.materialBahan} style={{opacity: page === 0 ? '1' : '0', height: page === 0 ? 'max-content' : '0', visibility: page === 0 ? 'visible' :'hidden'}}>
                    <ImageContainer className={styles.storyImage} width={300} height={300} >
                        <Image src={MaterialImg} layout="fill" alt="Material cargo lift" />
                    </ImageContainer>
                    <div>
                        <h2>Material dan Bahan</h2>
                        <p>Dalam produksi / fabrikasi lift barang, material yang kami gunakan semua bahan menggunakan material baru dan tidak menggunakan besi bekas / besi tua. Dan untuk mutu baja tersebut kami menggunakan bahan dari KS ataupun GG</p>
                    </div>
                </li>
                <li className={styles.rodaSangkar} style={{opacity: page === 1 ? '1' : '0', height: page === 1 ? 'max-content' : '0', visibility: page === 1 ? 'visible' :'hidden'}}>
                    <ImageContainer className={styles.storyImage} width={300} height={300} >
                        <Image src={RailImg} layout="fill" alt="Material cargo lift" />
                    </ImageContainer>
                    <div>
                        <h2>Rail dan Roda Sangkar</h2>
                        <p>Bahan rail untuk lift barang yang kami gunakan adalah menggunakan T RAIL. T Rail Ini biasa di pakai untuk rail yang biasa digunakan pada Lift Pasangger ( lift orang ). Bahan rail tersebut menggunakan baja murni dengan ketebalan 16mm dan system pemasangan menggunakan system baut untuk setiap sambungannya. Sedangkan untuk roda lift biasa kami menggunakan roda getsu / roda teflon dengan material plastik keras PE</p>
                    </div>
                </li>
                <li className={styles.controlSystem} style={{opacity: page === 2 ? '1' : '0', height: page === 2 ? 'max-content' : '0', visibility: page === 2 ? 'visible' :'hidden'}}>
                    <ImageContainer className={styles.storyImage} width={300} height={300} >
                        <Image src={ControlSystemImg} layout="fill" alt="Material cargo lift" />
                    </ImageContainer>
                    <div>
                        <h2>Control System</h2>
                        <p>Panel pada lift barang yang kami buat sudah mengusung panel control PLC atau relay system dimana dalam panel tersebut terdapat PLC atau relay yang sudah kita aplikasikan untuk system kontrol otomatis lift</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CargoLift