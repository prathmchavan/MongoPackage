import mongoose from 'mongoose';

/**
 * Connects to MongoDB.
 * @param {string} uri - The MongoDB connection string.
 * @returns {Promise<void>}
 */
export const connectDB = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

