import pool from "../services/postgres";

const userList = (request, response) => {
  response.send('Users')
}

const createUser = (request, response) => {
  const { name, email, password } = request.body;
}

export { createUser, userList };
