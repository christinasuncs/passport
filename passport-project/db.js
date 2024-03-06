const mongoose = require('mongoose');

// Replace <password> with your MongoDB Atlas password
const mongoURI = 'mongodb+srv://new_user:gdxwqcSfJ6G2m0DF@cluster0.1znnbzj.mongodb.net'


  const connectToMongoDB = async (uri) => {
    try {
      await mongoose.connect(uri);
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
    }
  };

  connectToMongoDB(mongoURI)
  
module.exports = connectToMongoDB;