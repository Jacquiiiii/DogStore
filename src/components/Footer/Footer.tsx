import Link from 'next/link'
import styles from './Footer.module.css'
import { useDispatch } from 'react-redux'
import { setProductCategory } from '@/store/slices/productSlice'

const Footer = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contact}>
          <h2>The Dog Store</h2>
          <p>123 Doggo St, Dog Town</p>
          <p>123-456-7890</p>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <h2 className={styles.linksHeader}>Products</h2>
            <Link href='shop' className={styles.link} onClick={() => dispatch(setProductCategory('food'))}>Food</Link>
            <Link href='shop' className={styles.link} onClick={() => dispatch(setProductCategory('treats'))}>Treats</Link>
            <Link href='shop' className={styles.link} onClick={() => dispatch(setProductCategory('toys'))}>Toys</Link>
            <Link href='shop' className={styles.link} onClick={() => dispatch(setProductCategory('supplies'))}>Supplies</Link>
          </div>
          <div className={styles.links}>
            <h2 className={styles.linksHeader}>About</h2>
            <Link href='' className={styles.link}>About Us</Link>
            <Link href='' className={styles.link}>Accessibility</Link>
            <Link href='' className={styles.link}>Sustainability</Link>
            <Link href='' className={styles.link}>Careers</Link>
          </div>
          <div className={styles.links}>
            <h2 className={styles.linksHeader}>Help</h2>
            <Link href='' className={styles.link}>Help Center</Link>
            <Link href='' className={styles.link}>Contact Us</Link>
            <Link href='' className={styles.link}>Shipping</Link>
            <Link href='' className={styles.link}>Returns</Link>
          </div>
        </div>
      </div>
      <div className={styles.jacqui}>
        <hr className={styles.hr} />
        <div className={styles.disclaimer}>
          <p>2024 | Designed and developed by Jacqui Koroll</p>
        </div>
      </div>
    </div>
  )
}

export default Footer