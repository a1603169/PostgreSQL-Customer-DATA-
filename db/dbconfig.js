const { Pool } = require('pg')

const pool = new Pool({
  user: "seunghunbang",
  host: "localhost",
  port: 5432,
  database: "customer",
  password: "<CONFIDENTIAL>"
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
