import Link from 'next/link'
import styles from './Footer.module.css'
import { useContext } from 'react'
import { ProductCategoryContext } from '@/providers/ProductCategoryProvider'

const Footer = () => {
  const { setProductCategory } = useContext(ProductCategoryContext)

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
            <Link href='' className={styles.link} onClick={() => setProductCategory('food')}>Food</Link>
            <Link href='' className={styles.link} onClick={() => setProductCategory('treats')}>Treats</Link>
            <Link href='' className={styles.link} onClick={() => setProductCategory('toys')}>Toys</Link>
            <Link href='' className={styles.link} onClick={() => setProductCategory('supplies')}>Supplies</Link>
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
          <p>@2024 | Designed and developed by Jacqui Koroll</p>
        </div>
      </div>
    </div>
  )
}

export default Footer