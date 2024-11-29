const express = require('express')
const router = express.Router()

// Import the controller functions
const TasksController = require('./controller')

// Route to get all tasks
router.get('/tasks', TasksController.getAllTasks)

// Route to create a new task
router.post('/tasks', TasksController.createTask)

// Route to mark a task as done
router.put('/tasks/:id', TasksController.markTaskAsDone)

// Route to delete a task
router.delete('/tasks/:id', TasksController.deleteTask)


module.exports = router
