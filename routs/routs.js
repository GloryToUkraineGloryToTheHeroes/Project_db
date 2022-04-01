const { Router } = require('express')
const { append } = require('express/lib/response')
const router = Router()
const database = require('../database/database')
const User = require('../database/schema')
const colors = require('colors')
const res = require('express/lib/response')



router.get('/about', (req, res) => {
    console.log('way - /about');
    res.render('about', {
        title: 'about',
        numbers: [1,2,3,4,5],
        boolT: true,
        isT : true
    })
})







router.get('/', async (req, res) => {
    var Elems = await User.find({})
    var elems = []
    var i = 1
    for (elem of Elems){
        elem.id = i++
        elems.push(elem.name +' : '+ elem.age + ', id: ' + elem.id)
    }

    console.log('way - /')
    res.render('main', {
        title: 'main',
        docs: elems,
        tr: true,
        isT : true
    })
})


var update = async function(){resultsF = await User.find({})}
var Elem = {}

var verif = function(){for (Doc of resultsF){
    let eStr = Elem.name
    if(eStr == Doc.name){
        throw 'this name is taken'
    }
}}
var errorM

router.post('/add', async(req, res) => {
    try{
        const user = new User({
            name : req.body.nameTitle,
            age : req.body.ageTitle
        })

        Elem.name = req.body.nameTitle
        Elem.age = req.body.ageTitle

        
        await update()
        await verif()

        let aArr = Elem.age
        if(aArr > 99 || aArr < 18){
            throw 'Invalid age'
        }

        await user.save().then(() => {
            update()
        }).then(() => {
            console.log(Elem.name)
        })
        
        await update()

        res.redirect('/')
    }catch(err){
        
        errorM = err
        
        res.redirect('/err')

        /*
        var redirF = function(){setTimeout(function(){res.redirect('/')}, 5000)}
        redirF()
        */

        console.log('EEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR'.red)
        console.log(err)
    }finally{
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        await update()
    }
})


router.get('/add', (req, res) => {
    console.log('way - /add')
    res.render('add', {
        title: 'add',
        isT : true
    })
})


router.get('/err', (req, res) => {
    console.log('way - /err')
    res.render('err',{
        errorM: errorM
    })
})

var Result = []
var resultsF
var element
var sendelement = []

router.post('/find', async (req, res) => {
    try{
        resultsF = await User.find({})
        console.log(resultsF)
        i = 1
        for(elem of resultsF){
            elem.id = i++
            Result.push(elem)
        }



        sendelement = []



        var elemId = req.body.elemId
        console.log(elemId)
        var n = parseInt(elemId) - 1
        if(resultsF[n] == undefined){
            
            throw err
        }
        console.log(resultsF[n])
        res.redirect('/find')
        element = resultsF[n]
        sendelement.push(element.name + ' : ' + element.age + ', id: ' + element.id)
        
    }catch(err){
        res.redirect('/')
        console.log(err)
    }finally{   
        console.log('find')
    }
})



router.get('/find', (req, res) => {
    console.log('way - /find')
    res.render('find', {
        title: 'find',
        element: sendelement,
        isT : true
    })
})





router.post('/delete', async (req, res) => {
    try{
        resultsF = await User.find({})
        console.log(resultsF)
        i = 1
        for(elem of resultsF){
            elem.id = i++
            Result.push(elem)
        }




        var elemId = req.body.elemId
        console.log(elemId)
        var n = parseInt(elemId) - 1
        if(resultsF[n] == undefined){
            
            throw err
        }
        console.log(resultsF[n])
        
        element = resultsF[n]

        var deleteResults = await User.deleteOne({name: element.name, age: element.age})
        console.log(deleteResults)
        res.redirect('/')
    }catch(err){
        res.redirect('/')
        console.log(err)
    }finally{
        console.log('delete')
    }
})


router.get('/delete', (req, res) => {
    console.log('way - /delete')
    res.render('delete', {
        title: 'delete',
        isT : true
    })
})

/*
router.get('/check', (req, res) => {
inputIn.value = inputIn.value.substring(0, 9);
})
*/




module.exports = router