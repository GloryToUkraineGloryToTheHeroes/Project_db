//function db(){
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const url = 'mongodb://127.0.0.1:27017/users'

const userSchema = new Schema({
    name: String,
    age: Number
},
{ versionKey:false})


async function run(){
    try{
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('connect')
        const User = mongoose.model('user', userSchema)
        const results = await User.find({})
        console.log(results)
    }catch(err){
        console.log(err)
    }finally{
        await mongoose.disconnect()
        console.log('disconnect')
    }
}

run()







/*
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, console.log('connect'))

const User = mongoose.model('user', userSchema)



User.find({name: 'x'}, (err, results) => {
    mongoose.disconnect()

    if(err) return console.log(err);

    console.log(results)
    console.log('disconnect');
})

*/
/*
}



module.exports = db
*/