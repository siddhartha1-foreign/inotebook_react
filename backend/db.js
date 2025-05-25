const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourdbname');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = connectToMongo;