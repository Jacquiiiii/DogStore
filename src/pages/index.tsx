import Head from "next/head"
import HomeContent from "@/components/HomeContent/HomeContent"
import Layout from "@/components/Layout/Layout"
import { Product, ProductsProps } from "./shop"
import { getProducts } from "@/apis/products/productsService"

const Home = ({ productsData }: ProductsProps) => {
  return (
    <>
      <Head>
        <title>Dog Store</title>
        <meta name="home page" content="Home page content for The Dog Store" />
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
