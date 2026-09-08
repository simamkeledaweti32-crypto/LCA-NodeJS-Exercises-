require('dotenv').config();
const pool = require('./db');

async function getAllUsers() {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
}

async function getUserById(id) {
  const [rows] = await pool.query('SELECT * FROM users WHERE id =?', [id]);
  return rows[0];
}

async function createUser(name, email) {
  const [result] = await pool.query('INSERT INTO users (name, email) VALUES (?,?)', [name, email]);
  return result.insertId;
}

async function updateUser(id, name, email) {
  const [result] = await pool.query('UPDATE users SET name =?, email =? WHERE id =?', [name, email, id]);
  return result.affectedRows;
}

async function deleteUser(id) {
  const [result] = await pool.query('DELETE FROM users WHERE id =?', [id]);
  return result.affectedRows;
}

async function test() {
  console.log('Creating users...');
  await createUser('Simamkele Daweti', 'simamkele@techcraft.co.za');
  await createUser('Thandi Nkosi', 'thandi@techcraft.co.za');

  console.log('All users:');
  console.log(await getAllUsers());

  await pool.end();
}

test();

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
