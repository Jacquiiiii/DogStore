import { Pool } from 'pg'

// const db = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// })

const db = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

export default db