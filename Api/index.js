import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; 
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect("mongodb+srv://rashup198:21Blc1377@cluster0.ak1ovd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to the database');
}).catch(err => {
  console.error(' Could not connect to the database:', err);
  process.exit(1);
});

const __dirname = path.resolve();

const app = express();

//cors
app.use(cors({
  origin: ['http://localhost:5173', 'https://yourfrontend.com'],
  credentials: true, 
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

// Serve frontend in production
app.use(express.static(path.join(__dirname, '/renting/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'renting', 'dist', 'index.html'));
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


