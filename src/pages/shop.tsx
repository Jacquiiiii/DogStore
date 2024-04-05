import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import ShopContent from "@/components/ShopContent/ShopContent"
import { getProducts } from "@/apis/products/productsService"
import { Product, ProductsProps } from "@/types/types"

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

export default Shop