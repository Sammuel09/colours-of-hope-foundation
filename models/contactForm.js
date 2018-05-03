const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cohp');

const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
    name: 'String',
    email: 'String',
    subject: 'String',
    message: 'String'
});

module.exports = mongoose.model('ContactForm', contactFormSchema);

// contactForm.create(
//     {
//         name: 'Samuel',
//         email: 'adeniransamuel@gmail.com',
//         subject: 'hello',
//         message: 'Hi Hi'
//     }, function(err, data){
//         if(err) {
//             console.log('error o')
//         } else {
//             console.log('success')
//             console.log(data)
//         }
//     });
