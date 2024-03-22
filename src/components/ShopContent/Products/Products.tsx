import { ProductsProps } from '@/pages/shop'
import styles from './Products.module.css'

const Products = ({ productsData }: ProductsProps) => {
  return (
    <div className={styles.products}>
      {productsData.map((product) =>
        <div className={styles.product}>
          <img src={product.src} alt={product.product_name} className={styles.productImage} />
          <div className={styles.productInfo}>
            <h3 className={styles.name}>{product.product_name}</h3>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.prices}>
              {product.discounted_price !== '0.00' ? 
                <>
                  <p className={styles.discountedPrice}>
                    ${product.discounted_price}
                  </p>
                  <p className={styles.strikedPrice}>${product.price}</p>
                </>
                :
                <p className={styles.price}>${product.price}</p>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products