const { Pool } = require('pg')

const pool = new Pool({
  user: "seunghunbang",
  host: "localhost",
  port: 5432,
  database: "customer",
  password: "wytmekd9857qwer!"
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}