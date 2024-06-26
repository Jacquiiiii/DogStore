import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setProductCategory, setProductSearchMatches } from '@/store/slices/productSlice'
import { useSelector } from 'react-redux'
import styles from './DesktopNav.module.css'
import { RootState } from '@/store/store'
import useLogout from '@/hooks/useLogout'
import { cartIcon } from '@/constants/constants'
import Search from '@/components/Search/Search'

const DesktopNav = () => {
  const dispatch = useDispatch()
  const { handleLogout } = useLogout()
  const isLoggedIn: boolean = useSelector((state: RootState) => state.login.isLoggedIn)
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)

  const links = [
    { href: '/shop', text: 'Shop', category: 'all' },
    { href: '/shop', text: 'New', category: 'new' },
    { href: '/shop', text: 'Bestsellers', category: 'bestsellers' },
    { href: '/shop', text: 'Deals', category: 'deals' },
  ]

  return (
    <div className={styles.desktopNav}>
      <div className={styles.topContent}>
        <Link href='/'>
          <h1 className={styles.storeName}>The Dog Store</h1>
        </Link>
        <div className={styles.rightLinks}>
          {isLoggedIn 
            ? <Link href='/' onClick={handleLogout} className={styles.link}>Logout</Link>
            : <Link href='/login' className={styles.link}>Login</Link>
          }
          <Link href='/cart' className={styles.cartLink}>
            <img src={cartIcon} className={styles.linkIcon} alt='cart' />
            ({cartItems.length})
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.leftLinks}>
          {links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className={styles.link} 
              onClick={() => {
                dispatch(setProductSearchMatches([]))
                dispatch(setProductCategory(link.category))
              }}
            >
              {link.text}
            </Link>
          ))}
          <Search />
        </div>
      </div>
    </div>
  )
}

export default DesktopNav