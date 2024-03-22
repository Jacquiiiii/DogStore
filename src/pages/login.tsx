import Head from "next/head"
import Layout from "@/components/Layout/Layout"
import LoginContent from "@/components/LoginContent/LoginContent"

const Login = () => {
  return (
    <>
      <Head>
        <title>Dog Store: Login</title>
        <meta name="login page" content="Login page content for The Dog Store" />
      </Head>
      <Layout>
        <LoginContent />
      </Layout>
    </>
  )
}

export default Login