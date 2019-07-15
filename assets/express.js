const { createServer } = require('http')

createServer((req, res) => {
    res.end('<h1>Hello World</h1>')
}) .listen(3000)

// cont express  = require('express')
// const app =  express()

// app.get('/one', (req, res) => {
//     res.send('#1')
// })
// const hotdogs = []

// // app.get('/hotdogs')

// app.get('/hotdogs/:id', (req, res) =>{
//     console.log(req)
// })
// app.listen(3000)
