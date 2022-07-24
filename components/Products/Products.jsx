import Image from 'next/image'
import React from 'react'
import styles from './Products.module.css'

const Products = ({data, brands, currentBrand, setCurrentBrand}) => {
    return (
        <>
        {data.length > 0 && brands.length > 0 ?
            <select value={currentBrand} onChange={e => setCurrentBrand(e.target.value)}>
                <option value="">All Brands</option>
                {brands.map((brand, index) => {
                    return (
                        <option key={index} value={brand.name}>{brand.name}</option>
                    )
                })}
            </select> : null}
        <ul className={styles.products}>
            {data.map(product => {
                return (
                    <li key={product.id}>
                        <div className={styles.productImage}>
                            <Image src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_BUCKET}/${product.photo}`} alt={product.name} layout='fill' objectFit='cover'/>
                        </div>
                        <div>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Products
