const express = require('express')
const router = express.Router()
const { getStudent, UpdateStudent, GetAllStudents, deleteStudent, addStudents } = require('../Controllers/StudentController')

router.post('/addstudent', addStudents)
router.get('/getAll', GetAllStudents)
router.get('/getstudent/:id', getStudent)
router.put('/UpdateStudent/:id', UpdateStudent)
router.delete('/deletestudent/:id', deleteStudent)

module.exports = router
