const res = require('express/lib/response');
const mongoose = require('mongoose');
const userSchem = require('./schema')

const url = 'mongodb://127.0.0.1:27017/users'



var doc
var docer = () => {module.exports.doc = doc}
var Resul = []
var Resuler = () => {module.exports.Resul = Resul}

async function run(){
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('connect')
        const User = userSchem
        var results = await User.find({})
        doc = results
       
        var i = 1;
        for(elem of results){
            elem.id = i++
            Resul.push(elem)
        }
        //console.log(Resul)
    }catch(err){
        console.log(err)
    }finally{
        docer()
        Resuler()
        //await mongoose.disconnect()
        //console.log('disconnect')
        
    }
}


//setTimeout(()=>{module.exports.doc = doc}, 200)


module.exports.run = run
