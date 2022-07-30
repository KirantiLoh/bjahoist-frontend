import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './Products.module.css'

const Products = ({data, brands, currentBrand, setCurrentBrand}) => {
    
    return (
        <>
        {data.length > 0 && brands.length > 0 ?
            <select className={styles.filterBrand} value={currentBrand} onChange={e => setCurrentBrand(e.target.value)}>
                <option value="">All Brands</option>
                {brands.map((brand, index) => {
                    return (
                        <option key={index} value={brand.name}>{brand.name}</option>
                    )
                })}
            </select> : null}
        <ul className={styles.products}>
            {data.map((product, index) => {
                return (
                    <li key={product.id}>
                        <div className={styles.productImage}>
                            <Image src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_BUCKET}/${product.photo}`} alt={product.name} layout='fill' objectFit='cover'/>
                        </div>
                        <div className={styles.productDetail}>
                            <div>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                            </div>
                            <a className='primary-btn' rel='noreferrer' target="blank" href={`https://wa.me/6287886721612?text=Halo%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20${product.name}`}>Cek Detail</a>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Products
