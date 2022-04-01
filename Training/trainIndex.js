
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const url = "mongodb://127.0.0.1:27017/users";

const userSchema = new Schema({
    name: String,
    age: Number
})

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});

const User = mongoose.model('user', userSchema)
const user = new User({
    name: 'Igor',
    age: 10
})

user.save((err) => {
    mongoose.disconnect()

    if(err) return console.log(err);

    console.log("user saved", user)
})






/*
User.create({name: 'x', age: 11}, (err, result) => {
    if(err) return console.log(err);

    console.log(result)
    User.find({}, (err, results) => {
        if(err) return console.log(err);
    
        mongoose.disconnect()
    
        console.log(results)
        console.log('disconnect');
    })
    
})
*/









/*
const mongodb = require('mongodb')
const Mongo = mongodb.MongoClient

const mongo = new Mongo(url, { useUnifiedTopology: true })

mongo.connect((err, client) => {
    const db = client.db('admin')
    const collection = db.collection('users')

    if(err) console.log(err);

    collection.find().toArray((err, results) => {
        if(err) return console.log(err)

        console.log(results)
        client.close()
    })
})
*/













/*
mongo.connect((err, client) => {

    const db = client.db('admin')
    const collection = db.collection('users')
    let users = [{ name : "Hyi" , age : 10}, {name: 'zalupa', age: 12}]
    collection.insertMany(users, (err, results) => {
        if(err) console.log(err);
        console.log(results)
        console.log(users)
        client.close
    })
})
*/







































/*

const colors = require("colors");
const express = require("express");
const hbs = require('hbs');
const exhbs = require('express-handlebars')

*/






























/* */
/*  


const app = express();


//layouts
app.engine('hbs', exhbs.engine({
    layoutsDir: 'app/layouts',
    defaultLayout: 'layout',
    extname: 'hbs'
}))

//partials
hbs.registerPartials(__dirname + '/app/partials')

//engine
app.set('view engine', 'hbs')
app.set('views', 'app')



app.use('/about', (req,res)=>{
    console.log('way - /about');
    res.render( 'about', {
        title: 'about',
        numbers: [123, 456, 789],
        boolT: true
    })
})



app.get('/',(req,res)=>{
    console.log('way - /');
    res.render('main', {
        title: 'main',
        numbers: [123, 456, 789]
    })
})


app.listen(3000,"127.0.0.1", ()=>{
    console.log('Funktioniert gut'.blue)
})




*//* */









/*
app.use(express.static(__dirname + "/app"));
 
app.use("/", function(req, res){
     
    res.sendFile(__dirname + '/app/dom.html')
});
*/


/*
app.use('/static', express.static(__dirname + 'app'))

app.use('/', (req, res)=>{
    console.log('way - /')
    res.sendFile(__dirname + '/app/dom.html')
})
*/







/*

const http = require('http')


http.createServer((req,res) => {
    res.setHeader('UserID', 10)
    res.end('Arbeiten')
}).listen(3000,'127.0.0.1', ()=>{
    console.log('masha bandul');
})
 */




/*app.use('/products/:category/price/:price', (req,res)=>{
    console.log('way - /');
    //res.sendFile(__dirname + '/app/dom.html')
    var category = req.params['category']
    var price = req.params['price']


    var mPrice = Array.from(price)

    console.log(mPrice);

    var nPrice = []

    for(num of mPrice){       
        if(!isNaN(parseFloat(num))){     
            nPrice.push(num)
        }
    }

    var pPrice = nPrice.join('')
    var intPrice = pPrice.toString()

    console.log(intPrice)
    
    if(intPrice < 80){
        res.send('<h1>category of product : ' + ' ' + category + '</h1>' + '<br>' + '<h2>price : ' + ' ' + 'small, fake?' + '</h2>')
    }else if(intPrice > 80 && intPrice < 120){
        res.send('<h1>category of product : ' + ' ' + category + '</h1>' + '<br>' + '<h2>price : ' + ' ' + 'normal, take' + '</h2>')
    }else if(intPrice > 120){
        res.send('<h1>category of product : ' + ' ' + category + '</h1>' + '<br>' + '<h2>price : ' + ' ' + 'wow, you still have two kidneys?' + '</h2>')
    }
}) */