import styles from './Social.module.css'

const Social = () => {
  return (
    <div className={styles.dogs}>
      <h2 className={styles.header}>Meet Our Social Media Superstars</h2>
      <div className={styles.dogsContainer}>
        <div className={styles.dog}>
          <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3N8ZW58MHx8MHx8fDA%3D" alt="Dog" className={styles.dogImage}/>
          <div className={styles.bio}>
            <h3>Archie</h3>
            <p>Loves cuddles</p>
            <p>1.4m followers</p>
          </div>
        </div>
        <div className={styles.dog}>
          <img src="https://images.unsplash.com/photo-1579112902044-211d42c6a4bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFkJTIwZG9nfGVufDB8fDB8fHww" alt="Dog" className={styles.dogImage}/>
          <div className={styles.bio}>
            <h3>Janice</h3>
            <p>Up to no good</p>
            <p>2.7m followers</p>
          </div>
        </div>
        <div className={styles.dog}>
          <img src="https://images.unsplash.com/photo-1568274604780-30c1bcacb31a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGRvZ3N8ZW58MHx8MHx8fDA%3D" alt="Dog" className={styles.dogImage}/>
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