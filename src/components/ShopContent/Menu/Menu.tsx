import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import styles from './Menu.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setProductCategory } from '@/store/slices/productSlice'
import { RootState } from '@/store/store'
import { productCategories } from '@/constants/constants'

const Menu = () => {
  const { productCategory } = useSelector((state: RootState) => state.product)
  const dispatch = useDispatch()

  // Capitalize the first letter of each category for nicer display on the ui
  const capitalizedCategories = productCategories.map(category => category.charAt(0).toUpperCase() + category.slice(1))
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
            onClick={() => dispatch(setProductCategory(category.toLowerCase()))}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Menu