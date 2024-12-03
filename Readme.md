![Node](https://img.shields.io/badge/node-v20.11.1-green)
![Vite](https://img.shields.io/badge/vite-v6.0.1-blue)
![React](https://img.shields.io/badge/react-v18.3.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Backend Coverage](https://img.shields.io/badge/backend%20coverage-93.5%25-brightgreen)
![Frontend Coverage](https://img.shields.io/badge/frontend%20coverage-75%25-yellow)

# Task List

This is a variation of a todo app with added drag-and-drop functionality, created for ZNiTech to showcase a portion of my skills.

## Instructions for local setup

### Backend Setup:
- Clone the Backend repository: `git clone https://github.com/Mikra011/todo-back.git`  
- Run the following command to install all necessary dependencies: `npm install`  
- Launch the server by executing: `npm run server` 

### Frontend Setup:
- Clone the Frontend repository: `git clone https://github.com/Mikra011/todo-front.git`  
- Run the following command to install all necessary dependencies: `npm install`  
- Launch the project in a development server by executing: `npm run dev`  
- Visit your app by navigating Chrome to `http://localhost:3000`

## Objectives

- I aimed to demonstrate how I would set up a project to ensure it can be easily scaled in the future.
- Fully implement the MVP and adhere to the Figma design specifications.
- Learn new skills and techniques throughout the development process.

## Outcomes

- I successfully showcased a scalable project structure.
- All the functions mentioned in the task description are fully implemented, and all elements from the Figma plan are incorporated. For those not included, I added my own personal touch.
- Although I had never implemented drag-and-drop functionality before, it turned out to be simpler and more enjoyable than I initially expected, despite the challenges.

## Stack

| **Backend**           | **Frontend**          |
|-----------------------|-----------------------|
| Node                  | Vite                  |
| Express               | React / Redux         |
| Supertest             | CSS                   |
| Jest                  | Styled Components     |
| Sqlite                | Jest                  |
| Knex                  | Dnd-kit               |
| Postgres              | React Testing Library |
                  
## Highlights

### Backend 

I used Express with a server/router/controller/model architecture, which I find an effective way to organize and separate backend functionality.

For the database, I utilized SQL with separate configurations for development and production environments. This approach ensures a smoother workflow and enhances the overall development experience.

### Frontend

I used RTK Query for backend interactions, and I really like how it centralizes all fetching and caching in one place. It's particularly convenient to work with, even when the app becomes more CRUD-heavy.

For the drag-and-drop functionality, I chose to use <a href="https://dndkit.com/" target="_blank">dnd-kit</a>. It's a lightweight, well-maintained library, and I would definitely use it again.

I added a basic spinner to keep users engaged while the app loads. This was mainly due to the slow speed of the free deployment I used.

### Style

Usually, I prefer styling with Tailwind, but this time I used CSS and Styled Components. There’s no particular reason for this choice; I simply wanted to take the opportunity to practice.

### Testing

Both the backend and frontend are tested. I am quite satisfied with the backend testing, while on the frontend, I wasn't able to fully test RTK Query. I invested some time into effective mocking, but it wasn’t enough to achieve the level of efficiency I aimed for. As a result, I decided not to include it. However, if necessary, I can implement it properly with additional time and effort.

### Deployemnt

The app is deployed on Render and the database on NeonDB. Feel free to explore the <a href="https://todo-front-0ajr.onrender.com/" target="_blank">live version</a>.

## Time Log 

| Task                         | Time         |
|------------------------------|--------------|
| Planning and learning        | 4h 43min     |
| Backend development          | 1h 22min     |
| Frontend development         | 3h 58min     |
| Deployment and debugging     | 5h 45min     |
| Testing and documentation    | 4h 22min     |
| **Total**                    | **20h 30min**|

It could have been done a bit faster, but since you mentioned that it wasn’t urgent, I decided to take my time. I hope that’s okay with you.

### Notes

The `npm run server` script will automatically reset the database (rollback, migrate, and seed) when the project is started. This behavior is intended solely to simplify and speed up the setup process for this test project. Normally, this would not be used in production or in a typical development workflow. Please be aware that this will erase and recreate the database every time the server is started.

This project was a great opportunity to practice my skills, and I'm glad I had the chance to learn about implementing drag-and-drop functionality. It feels like a win on my end. I look forward to receiving feedback, and thank you for taking the time to read through this!









