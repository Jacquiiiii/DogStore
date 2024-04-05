import { ProductsProps } from '@/types/types'
import styles from './Trending.module.css'

const Trending = ({productsData}: ProductsProps) => {
  const images = [
    {
      src: productsData[1].src,
      name: productsData[1].product_name,
    },
    {
      src: productsData[4].src,
      name: productsData[4].product_name,
    },
    {
      src: productsData[7].src,
      name: productsData[7].product_name,
    }
  ]

  return (
    <div className={styles.products}>
      <h2>Trending Products</h2>
      <div className={styles.trendingProducts}>
        <div className={styles.first}>
          <img 
            className={styles.small} 
            src={images[0].src} 
            alt={images[0].name} 
          />
          <span>{images[0].name}</span>
        </div>
        <div className={styles.second}>
          <img 
            className={styles.large} 
            src={images[1].src} 
            alt={images[1].name} 
          />
          <span>{images[1].name}</span>
        </div>
        <div className={styles.third}>
          <img 
            className={styles.small} 
            src={images[2].src} 
            alt={images[2].name} 
          />
          <span>{images[2].name}</span>
        </div>
      </div>
    </div>
  )
}

export default Trending