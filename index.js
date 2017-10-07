const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
const { questions } = require('./views/js/questions')

// console.log(questions)

var app = express();

app.use(express.static(__dirname + '/views'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    i = 0;
    res.render('index.hbs', {
        welcomeMessage: "Welcome to our online screening avenue",
        secondMessage: "Please fill in your credentials and click next to continue",


    });
});

let i = 0;
// let j = 0;
let arrayy = []

let arr = []

app.post('/scorer', (req, res) => {
    arrayy.push("1")
})

app.post('/start', (req, res) => {
    let { firstName, surname } = req.body;
    arr.push(firstName)
    arr.push(surname)
        // console.log(i)
    if (i === 10) {
        res.render('final.hbs', {
            surname: arr[1],
            firstName: arr[0],
            arrayy: (arrayy.length - 1) * 10
        })
        i = 0;
    } else {
        res.render('questionPages.hbs', {
            i,
            questionNumber: i + 1,
            question: questions[i].question,
            option1: questions[i].options[0],
            option2: questions[i].options[1],
            option3: questions[i].options[2],
            option4: questions[i].options[3],
            rightAnswer: questions[i].answer,
            percentAnswer: (i + 1) * 10,
            firstName: arr[0],
            surname: arr[1]
        })

    }
    i += 1;
})





hbs.registerHelper('passOrFail', (numb) => {
    if (numb > 50) {
        return 'pass'
    } else {
        return 'fail'
    }
})

app.listen(4005, () => console.log(`app running on port 4005`))