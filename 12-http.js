//const http = require('http')
const server = require('http').createServer((req,res)=>{
    console.log(req)
    res.write('<h1>Welcome to our home page</h1>')
    res.end()


})

server.listen(9101)