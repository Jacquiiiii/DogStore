import { Open_Sans } from 'next/font/google'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styles from './Search.module.css'
import { RootState } from '@/store/store'
import { useState } from 'react'
import { productSearch } from './utils/productSearch'
import { setProductCategory, setProductSearchMatches } from '@/store/slices/productSlice'
import { SearchProps } from '@/types/types'

const openSans = Open_Sans({ subsets: ['latin'] })

const Search = ({setMobileIsOpen, mobile}: SearchProps) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const products = useSelector((state: RootState) => state.product.products)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={mobile ? styles.mobileSearch : styles.search}>
      <input 
        className={`${openSans.className} ${mobile ? styles.mobileSearchInput : styles.searchInput}`} 
        placeholder='Search' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
        className={mobile ? styles.mobileSearchButton : styles.searchButton}
        onClick={() => {
          const productMatches = productSearch(products, searchTerm)
          dispatch(setProductSearchMatches(productMatches))
          dispatch(setProductCategory('all'))
          setMobileIsOpen && searchTerm !== '' && setMobileIsOpen(false)
          searchTerm !== '' && router.push('/shop')
          setSearchTerm('')
        }}
      >
        🔍
      </button>
    </div>
  )
}

export default Search