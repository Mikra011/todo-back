const Tasks = require('./model.js')

// Get all tasks
async function getAllTasks(req, res, next) {
    try {
        const tasks = await Tasks.getAllTasks()
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found' })
        }
        res.json(tasks)
    } catch (error) {
        next(new Error('An error occurred while retrieving tasks'))
    }
}

// Create a new task
async function createTask(req, res, next) {
    const { label } = req.body
    if (!label) {
        return res.status(400).json({ message: 'Task label is required' })
    }

    try {
        const [newTask] = await Tasks.createTask({ label, complete: false })
        res.status(201).json(newTask)
    } catch (error) {
        next(new Error('An error occurred while creating the task'))
    }
}

// Mark task as done
async function markTaskAsDone(req, res, next) {
    const { id } = req.params
    
    try {
        const [updatedTask] = await Tasks.markTaskAsDone(id)
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(updatedTask)
    } catch (error) {
        next(new Error('An error occurred while marking the task as done'))
    }
}

// Delete a task
async function deleteTask(req, res, next) {
    const { id } = req.params
    try {
        const deletedCount = await Tasks.deleteTask(id)
        if (deletedCount === 0) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json({ message: 'Task deleted successfully' })
    } catch (error) {
        next(new Error('An error occurred while deleting the task'))
    }
}

// Export the functions so they can be used in the router
module.exports = {
    getAllTasks,
    createTask,
    markTaskAsDone,
    deleteTask,
}
