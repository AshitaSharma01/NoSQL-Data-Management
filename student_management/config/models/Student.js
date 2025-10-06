// models/Student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a student name"],
  },
  age: {
    type: Number,
    required: [true, "Please add the student's age"],
  },
  course: {
    type: String,
    required: [true, "Please add the student's course"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
