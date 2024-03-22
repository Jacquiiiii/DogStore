import React, { useState, createContext } from 'react'

export const ProductCategoryContext = createContext()

const ProductCategoryProvider = props => {
  const [productCategory, setProductCategory] = useState('all')

  const value = { productCategory, setProductCategory }

  return (
    <ProductCategoryContext.Provider value={value}>
      {props.children}
    </ProductCategoryContext.Provider>
  )
}

export default ProductCategoryProvider
