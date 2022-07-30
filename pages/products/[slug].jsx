import axios from 'axios'
import HoistCrane from '@components/HoistCrane/HoistCrane'
import CargoLift from '@components/CargoLift/CargoLift'
import ChainHoist from '@components/ChainHoist/ChainHoist'
import WireRopeHoist from '@components/WireRopeHoist/WireRopeHoist'
import PartsAndAccessories from '@components/PartsAndAccessories/PartsAndAccessories'
import Slider from '@components/Slider/Slider'
import HoistCraneImage from '@public/hoist-crane.jpg'
import CargoLiftImage from '@public/cargo-lift.jpg'
import ChainHoistImage from '@public/chain-hoist.jpg'
import WireRopeHoistImage from '@public/wirerope-hoist.jpg'
import PartsAccessoriesImage from '@public/parts-accesories.jpg'
import styles from '@styles/ProductPage.module.css'

const ProductsBySlugPage = ({data, page, category, maxPage}) => {

    const getHeroImage = (slug) => {
        switch (slug) {
            case 'hoist-cranes':
                return HoistCraneImage
            case 'cargo-lifts':
                return CargoLiftImage
            case 'chain-hoists':
                return ChainHoistImage
            case 'wire-rope-hoists':
                return WireRopeHoistImage
            case 'parts-and-accessories':
                return PartsAccessoriesImage
        }
    }

    const Category = ({data, category}) => {
        switch (category) {
            case 'hoist-cranes':
                return <HoistCrane data={data} category={category} />
            case 'cargo-lifts':
                return <CargoLift data={data}  category={category} />
            case 'chain-hoists':
                return <ChainHoist data={data} category={category} />
            case 'wire-rope-hoists':
                return <WireRopeHoist data={data}  category={category} />
            case 'parts-and-accessories':
                return <PartsAndAccessories data={data} category={category} />
        }
    }

    

    return (
        <main>
            <div style={{position: 'relative'}}>
                <Slider data={[getHeroImage(category)]} />
                <div className={styles.intro}>
                    <h1>{`${category.charAt(0).toUpperCase()}${category.slice(1).replace(/-/g, ' ')}`}</h1>
                    <p>Berikut ini adalah produk kami dalam kategori {category.replace(/-/g, ' ')}</p>
                    <a href="#daftar" className="primary-btn">Lihat Selengkapnya</a>
                </div>
            </div>
            <Category data={data}  category={category} />
        </main>
    )
}

export default ProductsBySlugPage

export async function getServerSideProps({query}) {
    try {
        let response = await axios.get(`/products/${query.slug}?page=${query.page ? query.page : 1}`)
        let data = await response.data
        let productCountPerPage = data.results.length
        let maxPage = parseInt(data.count / productCountPerPage, 10) < 1 ? 1 : parseInt(data.count / productCountPerPage, 10)
        return {
            props: {
                data: data.results,
                category: query.slug,
                page: query.page ? parseInt(query.page) : 1,
                maxPage: maxPage
            }
        }
    } catch (err) {
        console.error(err)
        return {
            redirect: {
                permanent: true,
                destination: '/#products'
            },
            props: {
                data: [],
                page: 1
            }
        }
    }
}
