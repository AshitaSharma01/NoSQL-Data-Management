// routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.route("/")
  .get(getStudents)
  .post(createStudent);

router.route("/:id")
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
