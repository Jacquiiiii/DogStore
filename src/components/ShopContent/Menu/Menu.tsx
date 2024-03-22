import styles from './Menu.module.css'
import { useContext } from 'react'
import { ProductCategoryContext } from '@/providers/ProductCategoryProvider'

const Menu = () => {
  const { productCategory, setProductCategory } = useContext(ProductCategoryContext)

  return (
    <div className={styles.menu}>
      <h2 className={styles.heading}>Products</h2>
      <div className={styles.search}>
        <input className={styles.searchInput} />
        <button className={styles.searchButton}>🔍</button>
      </div>
      <div className={styles.buttons}>

        <button 
          className={`${styles.button} ${productCategory === 'all' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('all')}
        >
          All Products
        </button>

        <button 
          className={`${styles.button} ${productCategory === 'new' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('new')}
        >
          New
        </button>

        <button 
          className={`${styles.button} ${productCategory === 'bestsellers' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('bestsellers')}
        >
          Bestsellers
        </button>

        <button 
          className={`${styles.button} ${productCategory === 'deals' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('deals')}
        >
          Deals
        </button>

        <button 
          className={`${styles.button} ${productCategory === 'food' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('food')}
        >
          Food
        </button>

        <button 
          className={`${styles.button} ${productCategory === 'treats' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('treats')}
        >
          Treats
        </button>

        <button 
          className={`${styles.button} ${productCategory === 'toys' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('toys')}
        >
          Toys
        </button>

        <button 
          className={`${styles.button} ${productCategory === 'supplies' ? styles.selected : ''}`} 
          onClick={() => setProductCategory('supplies')}
        >
          Supplies
        </button>

      </div>
    </div>
  )
}

export default Menu