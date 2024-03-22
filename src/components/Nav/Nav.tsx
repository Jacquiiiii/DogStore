import Link from 'next/link'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import styles from './Nav.module.css'
import { ProductCategoryContext } from '@/providers/ProductCategoryProvider'
import { RootState } from '@/store/store'
import useLogout from '@/hooks/useLogout'

const Nav = () => {
  const { setProductCategory } = useContext(ProductCategoryContext)
  const { handleLogout } = useLogout()
  const isLoggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)

  return (
    <div className={styles.nav}>
      <div className={styles.promo}>
        FREE SHIPPING ON ALL ORDERS OF $50+
      </div>
      <div className={styles.storeName}>
        <Link href='/'>
          <h1>The Dog Store</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <div className={styles.leftLinks}>
          <Link href='/' className={styles.link}>
            <img 
              src="https://icons.veryicon.com/png/o/application/reconsortia-icons/house-37.png" 
              alt="Home" 
              className={styles.icon} 
              title="Home" 
            />
          </Link>
          <Link 
            href='/shop' 
            className={styles.link} 
            onClick={() => setProductCategory('all')}
          >
            Shop All
          </Link>
          <Link 
            href='/shop' 
            className={styles.link} 
            onClick={() => setProductCategory('new')}
          >
            New
          </Link>
          <Link 
            href='/shop' 
            className={styles.link} 
            onClick={() => setProductCategory('bestsellers')}
          >
            Bestsellers
          </Link>
          <Link 
            href='/shop' 
            className={styles.link} 
            onClick={() => setProductCategory('deals')}
          >
            Deals
          </Link>
        </div>
        <div className={styles.rightLinks}>
          {isLoggedIn &&
            <Link href='/' onClick={handleLogout} className={styles.link}>
              <img 
                src="https://icons.veryicon.com/png/o/system/fun-music-teaching-management-background/logout-icon-18.png" 
                alt="Logout" 
                className={styles.icon}
                title="Logout" 
              />
            </Link>
          }
          {!isLoggedIn &&
            <Link href='/login' className={styles.link}>
              <img 
                src="https://icons.veryicon.com/png/o/miscellaneous/first/person-8.png" 
                alt="Login" 
                className={styles.icon} 
                title="Login" 
              />
            </Link>
          }
          <Link href='/checkout' className={styles.link}>
            <img 
              src="https://icons.veryicon.com/png/o/miscellaneous/first/cart-32.png" 
              alt="Cart" 
              className={styles.icon}
              title="Cart"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav