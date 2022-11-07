// 1. import 'http' module
const http = require('http')
const app = require('./app')

// 2. define a PORT
const PORT = 5000 || process.env.PORT

// 3. create a server using the http module
const server = http.createServer(app)

// 4. listen your server on the defined PORT
server.listen(PORT)