import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import ShopContent from "@/components/ShopContent/ShopContent"

export type Product = {
  id: number,
  product_name: string,
  description: string,
  src: string,
  price: string,
  discounted_price: string,
  sales_count: number,
  inventory_count: number,
  category: string,
  created_at: string
}

export type ProductsProps = {
  productsData: Product[]
}

const Shop = ({ productsData }: ProductsProps) => {
  return (
    <>
      <Head>
        <title>Dog Store: Shop</title>
        <meta name="shop page" content="Shop page content for The Dog Store" />
      </Head>
      <Layout>
        <ShopContent productsData={productsData} />
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

export default Shop