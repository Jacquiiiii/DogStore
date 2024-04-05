import { ProductsProps } from '@/types/types'
import styles from './HomeContent.module.css'
import Social from './Social/Social'
import Trending from './Trending/Trending'

const HomeContent = ({productsData}: ProductsProps) => {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <img 
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Dog" 
          className={styles.image} 
        />
      </div>
      <Trending productsData={productsData} />
      <Social />
    </div>
  )
}

export default HomeContent