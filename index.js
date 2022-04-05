const colors = require("colors");
const express = require("express");
const hbs = require('hbs');
const exhbs = require('express-handlebars')
const router = require('./routs/routs')
const database = require('./database/database');

database.run()



const app = express()

app.engine('hbs', exhbs.engine({
    layoutsDir: 'app/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
}))

hbs.registerPartials(__dirname + 'app/partials')

app.set('view engine', 'hbs')
app.set('views', 'app')

app.use(express.urlencoded({extended : true}))

app.use(express.json());

app.use(router)

app.listen(3000, '127.0.0.1', ()=>{
    console.log('App is working'.blue);
})






/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const url = 'mongodb://127.0.0.1:27017/users'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
},
{ versionKey:false})

var doc


async function run(){
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('connect')
        const User = mongoose.model('user', userSchema)
        var results = await User.find({})
        doc = results
        console.log(results)
    }catch(err){
        console.log(err)
    }finally{
        await mongoose.disconnect()
        console.log('disconnect')
    }
}

run()

*/


/*
var neta = ()=>{process.exit(1)}

function meta(){setTimeout(neta, 5000);}

meta()
*/










//const db = require('./suka')
/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const url = 'mongodb://127.0.0.1:27017/users'

const userSchema = new Schema({
    name: String,
    age: Number
},
{ versionKey:false})

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, console.log('connect'))

const User = mongoose.model('user', userSchema)

User.find({}, (err, results) => {
    if(err) return console.log(err);

    mongoose.connection.close()

    console.log(results)
    console.log('disconnect');
})
*/

//db()
