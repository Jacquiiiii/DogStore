import Link from 'next/link'
import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './MobileNav.module.css'
import { ProductCategoryContext } from '@/providers/ProductCategoryProvider'
import { RootState } from '@/store/store'
import useLogout from '@/hooks/useLogout'

const MobileNav = () => {
  const { setProductCategory } = useContext(ProductCategoryContext)
  const { handleLogout } = useLogout()
  const isLoggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)
  const cartItems = useSelector((state: RootState) => state.cart)
  const [isOpen, setIsOpen] = useState(false)

  const linkIcon = 'https://icons.veryicon.com/png/o/commerce-shopping/icon-of-lvshan-valley-mobile-terminal/right-arrow-18.png'
  const openIcon = 'https://icons.veryicon.com/png/o/miscellaneous/system-icon-2/x-47.png'
  const closeIcon = 'https://icons.veryicon.com/png/o/miscellaneous/solid-bank/hamburger-62.png'
  const cartIcon = 'https://icons.veryicon.com/png/o/education-technology/alibaba-big-data-oneui/shopping-bag-22.png'
  const loginIcon = 'https://icons.veryicon.com/png/o/miscellaneous/mirror-icon/logout-39.png'
  const logoutIcon = 'https://icons.veryicon.com/png/o/miscellaneous/mirror-icon/logout-38.png'

  const links = [
    { href: '/shop', category: 'all', label: 'Shop All' },
    { href: '/shop', category: 'new', label: 'New' },
    { href: '/shop', category: 'bestsellers', label: 'Bestsellers' },
    { href: '/shop', category: 'deals', label: 'Deals' },
  ]

  return (
    <div className={styles.mobileNav}>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <img className={styles.menuIcon} src={isOpen ? openIcon : closeIcon} alt='menu' />
      </button>
      {isOpen &&
        <div className={styles.openedMenu}>
          <div className={styles.buttonContainer}>
            {isLoggedIn ? 
              <Link 
                href='/' 
                onClick={() => { handleLogout(); setIsOpen(false); }} 
                className={styles.logoutLink}
              >
                <img className={styles.linkIcon} src={logoutIcon} alt='logout' />
                <span>Logout</span>
              </Link>
              :  
              <Link 
                href='/login' 
                onClick={() => setIsOpen(false)} 
                className={styles.loginLink}
              >
                <img className={styles.linkIcon} src={loginIcon} alt='login' />
                <span>Login</span>
              </Link>
            }
            <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
              <img className={styles.menuIcon} src={openIcon} alt='menu' />
            </button>
          </div>
          <div className={styles.links}>
            {links.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => {setProductCategory(link.category); setIsOpen(false);}} 
                className={styles.link}
              >
                <span>{link.label}</span>
                <img className={styles.linkIcon} src={linkIcon} alt={link.label} />
              </Link>
            ))}
          </div>
        </div>
      }
      <Link href='/' className={styles.storeName}>
        <h1>The Dog Store</h1>
      </Link>
      <Link href='/cart' className={styles.cartLink}>
        <img src={cartIcon} className={styles.linkIcon} alt="cart" />
        ({cartItems.length})
      </Link>
    </div>
  )
}

export default MobileNav