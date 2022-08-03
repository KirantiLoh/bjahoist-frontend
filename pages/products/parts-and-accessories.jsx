import axios from 'axios'
import Slider from '@components/Slider/Slider'
import PartsAndAccessoriesImage from '@public/parts-accesories.jpg'
import styles from '@styles/ProductPage.module.css'
import Pagination from '@components/Pagination/Pagination'
import Head from 'next/head'
import PartsAndAccessories from '@components/PartsAndAccessories/PartsAndAccessories'

const CargoLiftsPage = ({data, page, category, maxPage}) => {

    return (
        <main>
            <Head>
              <title>Jual Parts dan Accessories untuk Hoists dll di BJA Hoist | Melayani jasa service hoist crane dan system electrical hoist crane serta pemasangan instalasi electrical hoist crane</title>
              <meta name="description" content="BJA Hoist menjual parts dan accessories untuk hoists dengan kualitas terbaik. BJA Hoist / bjahoist (Bintang Jaya Abadi) melayani jasa service hoist crane dan system electrical hoist crane, pemasangan instalasi electrical hoist crane, pembuatan cargo lift / lift barang, serta penjualan hoist crane,chain hoist, wire rope hoist, dan bagian atau aksesoris hoist" />
              <meta name="google-site-verification" content="US3IM2SRg6OsimW5O8gtDI0TWPnf9rCFEvPbEeoXPGI" />
              <link rel="icon" href="/favicon.ico" />
              <link rel="canonical" href="https://bjahoist.com" />
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta name='keyword' content='bjahoist, bja hoist, hoist, chain hoist, wire rope hoist, jual hoist second, hoist second, cargo lift, bintang jaya abadi, jual hoist murah, lift barang, beli hoist baru, hoist baru, servis hoist, servis hoist rusak, hoist crane, hitachi, nitchi, kito, jual hoist murah, hoist murah, hoist hitachi, hoist nitchi, hoist kito'/>
            </Head>
            <div style={{position: 'relative'}}>
                <Slider data={[PartsAndAccessoriesImage]} />
                <div className={styles.intro}>
                    <h1>{`${category.charAt(0).toUpperCase()}${category.slice(1).replace(/-/g, ' ')}`}</h1>
                    <p>Berikut ini adalah produk kami dalam kategori {category.replace(/-/g, ' ')}</p>
                    <a href="#daftar" className="primary-btn">Lihat Selengkapnya</a>
                </div>
            </div>
            <PartsAndAccessories data={data}  category={category} />
            <Pagination maxPage={maxPage} page={page} link={`/products/${category}`} />
        </main>
    )
}

export default CargoLiftsPage

export async function getServerSideProps({query}) {
    try {
        let response = await axios.get(`/products/parts-and-accessories?page=${query.page ? query.page : 1}`)
        let data = await response.data
        let productCountPerPage = data.results.length === 0 ? 1 : data.results.length
        let maxPage = parseInt(data.count / productCountPerPage, 10) < 1 ? 1 : parseInt(data.count / productCountPerPage, 10)
        return {
            props: {
                data: data.results,
                category: 'parts-and-accessories',
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
