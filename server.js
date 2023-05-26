const express = require('express')
const server = express()

server.all('/',(req,res) => {
    res.send(`200 OK`)
})

function keepAlive(){
    server.listen(3000,() => {
        console.log('Server is now ready!')
    })
}

module.exports = keepAlive;