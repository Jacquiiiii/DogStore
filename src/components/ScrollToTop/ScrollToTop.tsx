import { scrollToTopIcon } from '@/constants/constants'
import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button 
      onClick={handleScrollToTop} 
      className={styles.button}
    >
      <img 
        src={scrollToTopIcon} 
        alt='Scroll to top' 
        className={styles.icon}
        title='Back to top'
      />
    </button>
  )
}

export default ScrollToTop