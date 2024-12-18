const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: 'https://portfolio-varad-theta.vercel.app', // Frontend domain
    methods: ['GET', 'POST'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  })
);

// Your MongoDB connection logic here
const connectDB = require('./db/connection');
connectDB()
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Collection and POST route
const contact = require('./models/Contact');
app.post('/contact', async (req, res) => {
  try {
    console.log('Contact form submission:', req.body);
    let contacts = new contact(req.body);
    let result = await contacts.save();
    res.status(201).json(result);
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ message: 'Server error while saving contact data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
