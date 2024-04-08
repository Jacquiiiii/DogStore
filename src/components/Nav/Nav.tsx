import styles from './Nav.module.css'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.promo}>
        Free shipping on all orders of $50+
      </div>
      <DesktopNav />
      <MobileNav />
    </div>
  )
}

export default Nav