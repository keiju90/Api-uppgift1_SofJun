const mongoose = require('mongoose')
const Student = require('./user.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/example"

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = {
  connectDb,
  models: {
    Student
  }
}