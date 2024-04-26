import { Raleway } from "next/font/google"
import styles from './Layout.module.css'
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import { LayoutProps } from '@/types/types'

const raleway = Raleway({ subsets: ["latin"] })

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={`${raleway.className} ${styles.main}`}>
        <Nav />
        <div style={{height: '200px'}} />
        {children}
        <div style={{height: '100px'}} />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}

export default Layout