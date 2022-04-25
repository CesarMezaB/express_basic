// Usando objeto express
const express = require('express')
//App de Express
const app = express()
// Puerto en que se ca a ver la app: localhost:3000
const port = 3000

// Path inicial, respondereea a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello Wordl!')
})

// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launchx')
})


// Con esto inicializamos esta app 

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
    })
