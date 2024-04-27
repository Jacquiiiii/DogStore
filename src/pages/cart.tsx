import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import CartContent from '@/components/CartContent/CartContent'

const Cart = () => {
  return (
    <>
      <Head>
        <title>Dog Store: Cart</title>
        <meta name='cart page' content='Cart page content for The Dog Store' />
      </Head>
      <Layout>
        <CartContent />
      </Layout>
    </>
  )
}

export default Cart