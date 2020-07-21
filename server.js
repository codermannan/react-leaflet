const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app =  express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req, res) => {

    res.json({

        message : 'Welcome to our applicaiton'
    })

})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {

      console.log('serever is running ${PORT}');
})



