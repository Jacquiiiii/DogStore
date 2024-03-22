import Head from "next/head"
import HomeContent from "@/components/HomeContent/HomeContent"
import Layout from "@/components/Layout/Layout"
import { Product, ProductsProps } from "./shop"

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
  const res = await fetch('http://localhost:3000/api/products')
  const productsData: Product[] = await res.json()

  return {
    props: { productsData: productsData },
    revalidate: 1,
  }
}

export default Home
