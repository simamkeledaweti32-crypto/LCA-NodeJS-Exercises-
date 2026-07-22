const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// PRODUCTS ROUTES
app.get('/products', (req, res) => {
  res.json({ message: "This is the GET products route" });
});
app.post('/products', (req, res) => {
  res.json({ message: "This is the POST products route, a new product was added" });
});
app.put('/products', (req, res) => {
  res.json({ message: "This is the PUT products route, a product was fully updated" });
});
app.patch('/products', (req, res) => {
  res.json({ message: "This is the PATCH products route, a product was partially updated" });
});
app.delete('/products', (req, res) => {
  res.json({ message: "This is the DELETE products route, a product was removed" });
});

// EMPLOYEES ROUTES
app.get('/employees', (req, res) => {
  res.json({ message: "This is the GET employees route" });
});
app.post('/employees', (req, res) => {
  res.json({ message: "This is the POST employees route, a new employee was added" });
});
app.put('/employees', (req, res) => {
  res.json({ message: "This is the PUT employees route, a employee was fully updated" });
});
app.patch('/employees', (req, res) => {
  res.json({ message: "This is the PATCH employees route, a employee was partially updated" });
});
app.delete('/employees', (req, res) => {
  res.json({ message: "This is the DELETE employees route, a employee was removed" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
