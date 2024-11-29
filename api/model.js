const db = require('../data/db-config')

// Get all tasks
function getAllTasks() {
    return db('tasks')
}

// Create a new task
function createTask(task) {
    return db('tasks').insert(task).returning('*')
}

// Mark a task as done
function markTaskAsDone(taskId) {
    return db('tasks')
        .where({ id: taskId })
        .update({ complete: true })
        .returning('*')
}

// Delete a task
function deleteTask(taskId) {
    return db('tasks')
        .where({ id: taskId })
        .del()
}

module.exports = {
    getAllTasks,
    createTask,
    markTaskAsDone,
    deleteTask,
}
