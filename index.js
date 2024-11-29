const server = require('./api/server.js')

const port = process.env.PORT || 9000 // fallback in case there is no PORT in either process.env nor the environment

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`)
})