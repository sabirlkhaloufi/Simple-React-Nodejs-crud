const StudentModel = require('../Models/StudentModel')
const asyncHandler = require('express-async-handler')



// method  : post
// url     : api/students/add
const addStudents = asyncHandler(async (req, res) => {
  const { firstName, lastName, Email, dateOfBirth } = req.body
  if (!firstName || !lastName || !Email || !dateOfBirth) {
      res.status(400)
      throw new Error('please add all fields')
  } else {
      try {
          const student = await StudentModel.create({
                firstName,
                lastName,
                Email,
                dateOfBirth
          });

          res.status(200).send(student)

      } catch (error) {
          res.status(400)
          throw new Error(error)
      }
  }
})

// method : get
// url : /api/students/getAll
const GetAllStudents = asyncHandler(async (req, res) => {
  try {
    const students = await StudentModel.find()
    res.status(200).send(students)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})


// method : get
// url    : api/students/getstudent/:id
const getStudent = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const student = await StudentModel.findOne({ _id: id })
    res.send(student)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

// method : put
// url    : api/Students/UpdateStudent/:id
const UpdateStudent = asyncHandler(async (req, res) => {
  const { id } = req.params
  const {firstName, lastName, Email, dateOfBirth} = req.body
  try {
    const studentsInfo = await StudentModel.updateOne(
      { _id: id },
      {firstName, lastName, Email, dateOfBirth}
    )
    res.send({ message: 'updated success' })
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})


// method : get
// url    : api/students/deletestudent/:id
const deleteStudent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
      const student = await StudentModel.findOneAndRemove({ _id: id });
      res.status(200).send({ message: "deleted success" })
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})

module.exports = {getStudent, GetAllStudents, UpdateStudent, deleteStudent, addStudents}
