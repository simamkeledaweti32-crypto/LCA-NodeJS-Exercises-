const db = require('../db');

exports.getAllProducts = async () => {
  const [rows] = await db.query('SELECT * FROM products');
  return rows;
};

exports.getProductById = async (id) => {
  const [rows] = await db.query('SELECT * FROM products WHERE id =?', [id]);
  return rows[0];
};

exports.createProduct = async (product) => {
  const { name, price, stock } = product;
  const [result] = await db.query(
    'INSERT INTO products (name, price, stock) VALUES (?,?,?)',
    [name, price, stock]
  );
  return result.insertId;
};

exports.updateProduct = async (id, product) => {
  const { name, price, stock } = product;
  await db.query(
    'UPDATE products SET name =?, price =?, stock =? WHERE id =?',
    [name, price, stock, id]
  );
};

exports.deleteProduct = async (id) => {
  await db.query('DELETE FROM products WHERE id =?', [id]);
};
