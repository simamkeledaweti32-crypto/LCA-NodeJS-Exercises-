const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 }
];

let employees = [
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Designer' }
];

// ===== PRODUCT ROUTES =====

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// POST new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.json({ message: 'Product deleted' });
});

// ===== EMPLOYEE ROUTES =====

// GET all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// GET employee by id
app.get('/api/employees/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  res.json(employee);
});

// POST new employee
app.post('/api/employees', (req, res) => {
  const newEmployee = {
    id: employees.length + 1,
    name: req.body.name,
    role: req.body.role
  };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// PATCH update employee role
app.patch('/api/employees/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).json({ message: 'Employee not found' });
  if (req.body.role) employee.role = req.body.role;
  res.json(employee);
});

// DELETE employee
app.delete('/api/employees/:id', (req, res) => {
  employees = employees.filter(e => e.id !== parseInt(req.params.id));
  res.json({ message: 'Employee deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
