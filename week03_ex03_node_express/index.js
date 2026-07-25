const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/employees', employeeRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('LCA Exercise 3 API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
