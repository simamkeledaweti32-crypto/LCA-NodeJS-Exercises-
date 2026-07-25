const db = require('../db');

exports.getAllEmployees = async () => {
  const [rows] = await db.query('SELECT * FROM employees');
  return rows;
};

exports.getEmployeeById = async (id) => {
  const [rows] = await db.query('SELECT * FROM employees WHERE id =?', [id]);
  return rows[0];
};

exports.createEmployee = async (employee) => {
  const { name, position, salary } = employee;
  const [result] = await db.query(
    'INSERT INTO employees (name, position, salary) VALUES (?,?,?)',
    [name, position, salary]
  );
  return result.insertId;
};

exports.updateEmployee = async (id, employee) => {
  const { name, position, salary } = employee;
  await db.query(
    'UPDATE employees SET name =?, position =?, salary =? WHERE id =?',
    [name, position, salary, id]
  );
};

exports.deleteEmployee = async (id) => {
  await db.query('DELETE FROM employees WHERE id =?', [id]);
};
