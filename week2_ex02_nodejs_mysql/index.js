require('dotenv').config();
const db = require('./db');

function addUser(name, email) {
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Error adding user:', err.message);
      return;
    }
    console.log('User added with ID:', result.insertId);
  });
}

function getUsers() {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err.message);
      return;
    }
    console.log('Users:', results);
    db.end();
  });
}

// Example usage
addUser('Test User', 'test@techcraft.com');

setTimeout(() => {
  getUsers();
}, 1000);
