import Head from "next/head"
import Layout from "@/components/Layout/Layout"

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Dog Store: Checkout</title>
        <meta name="checkout page" content="Checkout page content for The Dog Store" />
      </Head>
      <Layout>
        <div style={{height: '1000px', paddingTop: '200px'}}>Checkout content</div>
      </Layout>
    </>
  )
}

export default Checkout