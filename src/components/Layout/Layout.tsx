import { Open_Sans } from 'next/font/google'
import styles from './Layout.module.css'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import { LayoutProps } from '@/types/types'

const openSans = Open_Sans({ subsets: ['latin'] })

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={`${openSans.className} ${styles.main}`}>
        <Nav />
        <div className={styles.topSpacer} />
        {children}
        <div className={styles.bottomSpacer} />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}

export default Layout