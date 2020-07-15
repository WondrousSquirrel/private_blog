import pool from "../services/postgres";

const test =  (request, response) => {
  pool.query('SELECT NOW()').then(res => response.send(res.rows[0])).catch(error => response.status(500).send(error));
}

export { test };
