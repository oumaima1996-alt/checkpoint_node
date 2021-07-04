// const sum = require('./calcul')
// console.log('hello world')
// sum(2,3)
// const fs = require('fs')
// console.log(fs)

//create server using Node.js
const http = require("http")
const server = http.createServer((request, response) => {
    response.end("hello world")
})
server.listen(5000, () => console.log("server is running"))