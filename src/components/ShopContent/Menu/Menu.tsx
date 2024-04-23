import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import styles from './Menu.module.css'
import { useContext } from 'react'
import { ProductCategoryContext } from '@/providers/ProductCategoryProvider'

const Menu = () => {
  const { productCategory, setProductCategory } = useContext(ProductCategoryContext)

  const categories = ['all', 'new', 'bestsellers', 'deals', 'food', 'treats', 'toys', 'supplies']
  const capitalizedCategories = categories.map(category => category.charAt(0).toUpperCase() + category.slice(1))
  const defaultOption = productCategory.charAt(0).toUpperCase() + productCategory.slice(1)

  return (
    <div className={styles.menu}>
      <div className={styles.dropdownContainer}>
        <Dropdown 
          options={capitalizedCategories} 
          onChange={(option) => {
            setProductCategory(option.value.toLowerCase())
          }} 
          value={defaultOption} 
          placeholder={defaultOption}
          controlClassName={styles.dropdown}
        />
      </div>
      <div className={styles.buttonContainer}>
        {capitalizedCategories.map(category => (
          <button 
            key={category.toLowerCase()}
            className={`${styles.button} ${productCategory === category.toLowerCase() ? styles.selected : ''}`} 
            onClick={() => setProductCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Menu