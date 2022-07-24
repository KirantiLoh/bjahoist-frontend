import Products from '@components/Products/Products'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const CargoLift = ({data, category}) => {
  const [products, setProducts] = useState(data)
    const [brands, setBrands] = useState([])
    const [currentBrand, setCurrentBrand] = useState('')

    const getBrands = useCallback(async () => {
        let response = await axios.get(`/products/${category}/brands`)
        let data = await response.data
        if (response.status === 200) {
            setBrands(data)
        }
    }, [category])

    const changeFilter = useCallback(() => {
        setProducts(currentBrand ? data.filter(item => { return item.brand === currentBrand}) : data)
    }, [data, currentBrand])
    
    useEffect(() => {
        getBrands()
    }, [getBrands])

    useEffect(() => {
        changeFilter()
    }, [changeFilter])

  return (
    <div className="container" id="daftar">
        <h1 className="title">Produk Kami</h1>
        <Products data={products} brands={brands} currentBrand={currentBrand} setCurrentBrand={setCurrentBrand} />
    </div>
  )
}

export default CargoLift