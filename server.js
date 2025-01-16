const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the connection function
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/postRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://anish-devhub.vercel.app',], // Replace with your Vercel frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow cookies or other credentials
}));
// Connect to MongoDB
connectDB(); // Call the connection function from db.js

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
