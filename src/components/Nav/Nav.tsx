import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'

const Nav = () => {
  const promos = [
    'Free shipping on all orders of $50+', 
    'Buy 10 bags of food and get one free', 
    'Save 10% on select treats with code SAVE10'
  ]
  const [currentPromo, setCurrentPromo] = useState(promos[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo(prevPromo => {
        const nextIndex = (promos.indexOf(prevPromo) + 1) % promos.length
        return promos[nextIndex]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.nav}>
      <div className={styles.promo}>{currentPromo}</div>
      <DesktopNav />
      <MobileNav />
    </div>
  )
}

export default Nav