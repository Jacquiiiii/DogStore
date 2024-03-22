import Link from "next/link"
import styles from "./RegisterContent.module.css"
import useRegister from "@/hooks/useRegister"

const RegisterContent = () => {
  const { handleSubmit } = useRegister()

  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <h2 className={styles.title}>Register</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter first name"
            name="first name"
          />
          <input
            className={styles.input}
            type="test"
            placeholder="Enter last name"
            name="last name"
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Enter email"
            name="email"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Enter password"
            name="password"
          />
          <button type="submit" className={styles.button}>Register</button>
        </form>
        <div className={styles.links}>
          <span>Already have an account?</span>
          <Link className={styles.link} href="/login">Log in here</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterContent