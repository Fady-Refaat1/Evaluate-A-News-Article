var path = require('path')
const express = require('express')
const fetch = require('node-fetch');
const app = express()

const dotenv = require('dotenv');
dotenv.config();


// const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
    console.log('Example app listening on port 8083!')
})

//API
const apiKey = process.env.API_ID
let userUrl = ''

app.post('/getDataFromApi',async (req, res) => {
    userUrl = req.body.url;
    // console.log(userUrl)
    DataFromApi =await (await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${userUrl}&lang=en`)).json()
    // console.log(DataFromApi)
    const data = {
        model: DataFromApi['model'],
        score_tag: DataFromApi.score_tag,
        agreement:DataFromApi.agreement,
        subjectivity: DataFromApi.subjectivity,
        confidence: DataFromApi.confidence,
        irony: DataFromApi.irony,
    }
    res.send(data)
})
