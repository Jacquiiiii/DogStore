import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import RegisterContent from "@/components/RegisterContent/RegisterContent"

const Register = () => {
  return (
    <>
      <Head>
        <title>Dog Store: Register</title>
        <meta name="register page" content="Register page content for The Dog Store" />
      </Head>
      <Layout>
        <RegisterContent />
      </Layout>
    </>
  )
}

export default Register