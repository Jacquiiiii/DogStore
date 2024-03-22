import Link from "next/link"
import useLogin from "../../hooks/useLogin"
import styles from "./LoginContent.module.css"

const LoginContent = () => {
  const { handleSubmit } = useLogin()

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <div className={styles.links}>
          <Link className={styles.link} href="/">Reset password</Link>
          <Link className={styles.link} href="/register">Register for an account</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginContent