import Link from 'next/link'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import styles from './DesktopNav.module.css'
import { ProductCategoryContext } from '@/providers/ProductCategoryProvider'
import { RootState } from '@/store/store'
import useLogout from '@/hooks/useLogout'

const DesktopNav = () => {
  const { setProductCategory } = useContext(ProductCategoryContext)
  const { handleLogout } = useLogout()
  const isLoggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)
  const cartItems = useSelector((state: RootState) => state.cart)

  const cartIcon = 'https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/shopping-bag-22.png'

  return (
    <div className={styles.desktopNav}>
      <div className={styles.storeName}>
        <Link href='/'>
          <h1>The Dog Store</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <div className={styles.leftLinks}>
          <Link href='/shop' className={styles.link} onClick={() => setProductCategory('all')}>Shop</Link>
          <Link href='/shop' className={styles.link} onClick={() => setProductCategory('new')}>New</Link>
          <Link href='/shop' className={styles.link} onClick={() => setProductCategory('bestsellers')}>Bestsellers</Link>
          <Link href='/shop' className={styles.link} onClick={() => setProductCategory('deals')}>Deals</Link>
        </div>
        <div className={styles.rightLinks}>
          {isLoggedIn 
            ? <Link href='/' onClick={handleLogout} className={styles.link}>Logout</Link>
            : <Link href='/login' className={styles.link}>Login</Link>
          }
          <Link href='/cart' className={styles.cartLink}>
            <img src={cartIcon} className={styles.linkIcon} alt="cart" />
            ({cartItems.length})
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesktopNav