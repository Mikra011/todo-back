const request = require('supertest')
const express = require('express')
const server = require('../api/server')
const tasksController = require('../api/controller')
const db = require('../data/db-config')
const tasksModel = require('../api/model')

describe('Tasks Controller', () => {
    beforeAll(async () => {
        await db.migrate.rollback()
        await db.migrate.latest()
        await db.seed.run()
    })

    afterAll(async () => {
        await db.destroy() // Ensure the database connection is closed after tests
    })

    // --- Test getAllTasks ---
    describe('GET /api/tasks', () => {
        it('should retrieve all tasks', async () => {
            const response = await request(server).get('/api/tasks')
            expect(response.status).toBe(200)
            expect(response.body).toBeDefined()
            expect(Array.isArray(response.body)).toBe(true)
        })

        it('should return 404 if no tasks are found', async () => {
            // Clear the tasks table to ensure no tasks are present
            await db('tasks').truncate()

            const response = await request(server).get('/api/tasks')
            expect(response.status).toBe(404)
            expect(response.body.message).toBe('No tasks found')
        })
    })

    // --- Test createTask ---
    describe('POST /api/tasks', () => {
        it('should create a new task', async () => {
            const task = { label: 'Test Task' }
            const response = await request(server)
                .post('/api/tasks')
                .send(task)

            expect(response.status).toBe(201)
            expect(response.body).toHaveProperty('label', 'Test Task')
            expect(response.body).toHaveProperty('complete', 0)
        })

        it('should return 400 if label is missing', async () => {
            const response = await request(server).post('/api/tasks').send({})
            expect(response.status).toBe(400)
            expect(response.body.message).toBe('Task label is required')
        })
    })

    // --- Test markTaskAsDone ---
    describe('PUT /api/tasks/:id', () => {
        it('should mark a task as done (happy path)', async () => {
            // First, create a task to mark as done
            const createResponse = await request(server)
                .post('/api/tasks')
                .send({ label: 'Task to mark as done' })

            const taskId = createResponse.body.id

            const response = await request(server).put(`/api/tasks/${taskId}`)
            expect(response.status).toBe(200)
            expect(response.body.complete).toBe(1)
        })

        it('should return 404 if task not found (sad path)', async () => {
            const response = await request(server).put('/api/tasks/999999')
            expect(response.status).toBe(404)
            expect(response.body.message).toBe('Task not found')
        })
    })

    // --- Test deleteTask ---
    describe('DELETE /api/tasks/:id', () => {
        it('should delete a task (happy path)', async () => {
            // First, create a task to delete
            const createResponse = await request(server)
                .post('/api/tasks')
                .send({ label: 'Task to delete' })

            const taskId = createResponse.body.id

            const response = await request(server).delete(`/api/tasks/${taskId}`)
            expect(response.status).toBe(200)
            expect(response.body.message).toBe('Task deleted successfully')
        })

        it('should return 404 if task not found (sad path)', async () => {
            const response = await request(server).delete('/api/tasks/999999')
            expect(response.status).toBe(404)
            expect(response.body.message).toBe('Task not found')
        })
    })
})