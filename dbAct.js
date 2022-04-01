
const mongoose = require('mongoose')
const userSchem = require('./database/schema')

const url = 'mongodb://127.0.0.1:27017/users'




async function run(){
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('connect')
        const User = userSchem
        var result = await User.deleteMany({name: 'q'})
        console.log('deleted user : ' + " " + result)
    }catch(err){
        console.log(err)
    }finally{
        mongoose.disconnect()
    }
}

run()








/*

async function run(){
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('connect')
        const User = userSchem
        var results = await User.find({})
        console.log(results)
    }catch(err){
        console.log(err)
    }finally{
        mongoose.disconnect()
    }
}


run()

*/