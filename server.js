const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

const conn = 'mongodb+srv://DBjpw:silentempire@cluster0-pltav.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(conn, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Conectado ao banco remoto')

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.set('view engine', 'ejs')

    const db = client.db('db-discos')
    const discosCollection = db.collection('discos')

    app.get('/', function (req, res) {
        //res.sendFile(__dirname + '/index.html')
        db.collection('discos').find().toArray()
            .then(results => {
                console.log(results)
                res.render('index.ejs', {discos: results})
            })
            .catch(error => console.error(error))
    })

    app.post('/discos', (req, res) => {
        discosCollection.insertOne(req.body).then(result => {
            console.log(result);
            res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/discos', (req, res) => {
        console.log(req.body)
    })

})

app.listen(3000, function () {
    console.log('Ouvindo na porta 3000')
})