const { Pool, Client } = require('pg');

const pool = new Pool({
  host: "127.0.0.1",
  user: "postgres",
  port: 5432,
  password: "password",
  database: "boulders"
})
