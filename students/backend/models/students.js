const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

  student: {
    email: String,
    name: String,
    address: {
      gata: String,
      postnummer: String,
      ort: String
    }

  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student; 