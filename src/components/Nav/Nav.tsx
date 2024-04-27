import { useState, useEffect } from 'react'
import styles from './Nav.module.css'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
import { promos } from '@/constants/constants'

const Nav = () => {
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