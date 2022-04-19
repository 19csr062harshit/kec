const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.set('views','./views')
app.set('view engine','ejs')

const DB = 'mongodb+srv://harshit:harshit1803@cluster0.70yme.mongodb.net/htmlwithnodejs?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log('connection successfull');
}).catch((err)=>{
    console.log('no connection');})

app.use(express.static('public'))
app.use('/css',express.static(__dirname+ 'public/css'))
app.use('/js',express.static(__dirname+ 'public/js'))
app.use('/img',express.static(__dirname+ 'public/img'))

app.get('/index',function(req,res) => {
    res.render('index',{text: 'This is harshit'})
});

app.listen(port,() => console.info(`Listening on port ${port}`))