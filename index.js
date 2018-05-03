const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// connect to database
mongoose.connect('mongodb://localhost/cohp');

const contactForm = require('./models/contactForm.js');

app.get ('/', 
    (req, res) => res.render('landing')
);

app.post('/contact', function(req, res) {
    // console.log('Yayy!');
    // console.log(req.body);
    contactForm.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }, function(err, data){
        if(err) {
            console.log('ERROR ERROR ERROR')
        } else {
            console.log('INFO IS:')
            console.log(data)
        }
    });
});

app.listen(3000, 
    () => console.log('Server started on port 3000')
);