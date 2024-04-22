import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import CheckoutContent from "@/components/Checkout/CheckoutContent"

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Dog Store: Checkout</title>
        <meta name="checkout page" content="Checkout page content for The Dog Store" />
      </Head>
      <Layout>
        <CheckoutContent />
      </Layout>
    </>
  )
}

export default Checkout