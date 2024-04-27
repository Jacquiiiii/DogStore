import { ProductsProps } from '@/types/types'
import styles from './HomeContent.module.css'
import Social from './Social/Social'
import Trending from './Trending/Trending'
import { dogBanner } from '@/constants/constants'

const HomeContent = ({productsData}: ProductsProps) => {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <img 
          src={dogBanner}
          alt='Dog' 
          className={styles.image} 
        />
      </div>
      <Trending productsData={productsData} />
      <Social />
    </div>
  )
}

export default HomeContent