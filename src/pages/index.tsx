import Head from 'next/head'
import HomeContent from '@/components/HomeContent/HomeContent'
import Layout from '@/components/Layout/Layout'
import { getProducts } from '@/apis/products/productsService'
import { Product, ProductsProps } from '@/types/types'
import { useDispatch } from 'react-redux'
import { setProducts } from '@/store/slices/productSlice'

const Home = ({ productsData }: ProductsProps) => {
  const dispatch = useDispatch()

  // Dispatches the products data to the store
  dispatch(setProducts(productsData))

  return (
    <>
      <Head>
        <title>Dog Store</title>
        <meta name='home page' content='Home page content for The Dog Store' />
      </Head>
      <Layout>
        <HomeContent productsData={productsData} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  // Fetches directly from the API as props are obtained at server build time
  const rawProductsData: Product[] = await getProducts()

  // Formats data so each products created_at value is a string instead of a Date object
  const productsData = rawProductsData.map(product => ({
    ...product,
    created_at: product.created_at?.toString(),
  }))

  return {
    props: { productsData: productsData },
    revalidate: 1,
  }
}

export default Home
