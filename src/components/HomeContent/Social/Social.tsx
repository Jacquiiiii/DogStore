import { archie, hugo, janice } from '@/constants/constants'
import styles from './Social.module.css'

const Social = () => {
  return (
    <div className={styles.dogs}>
      <h2 className={styles.header}>Meet Our Social Media Superstars</h2>
      <div className={styles.dogsContainer}>
        <div className={styles.dog}>
          <img src={archie} alt='Dog' className={styles.dogImage}/>
          <div className={styles.bio}>
            <h3>Archie</h3>
            <p>Loves cuddles</p>
            <p>1.4m followers</p>
          </div>
        </div>
        <div className={styles.dog}>
          <img src={janice} alt='Dog' className={styles.dogImage}/>
          <div className={styles.bio}>
            <h3>Janice</h3>
            <p>Up to no good</p>
            <p>2.7m followers</p>
          </div>
        </div>
        <div className={styles.dog}>
          <img src={hugo} alt='Dog' className={styles.dogImage}/>
          <div className={styles.bio}>
            <h3>Hugo</h3>
            <p>The softie</p>
            <p>575k followers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social