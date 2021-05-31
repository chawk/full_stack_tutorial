const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/about.html'))
})

app.get('/ajax', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/ajax.html'))
})

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            title: "Braveheart"
        },
        {
            title: "Glory"
        },
        {
            title: "Saving Private Ryan"
        }
    ]

    res.json(movies)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})