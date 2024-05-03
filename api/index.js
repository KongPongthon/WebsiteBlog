const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const CreateBlogDessert = require('./models/CreateBlogDessert')
const CreateBlogCafe = require('./models/CreateBlogCafe')
const bcrypt = require('bcrypt')
const app = express()
const jwt = require('jsonwebtoken')
const cookiePs = require('cookie-parser')
const multer = require('multer')
const uploadfile = multer({ dest:'uploads/' })
const fs = require('fs')
const dotenv = require('dotenv').config()

const salt=bcrypt.genSaltSync(10)
const secret='asdasdaf51as56asd1as45d1as45d1asd1asdasdas4'

app.use(cors({credentials:true,origin:process.env.Url_Cors}))
app.use(express.json())
app.use(cookiePs())
app.use('/uploads',express.static(__dirname + '/uploads'))

mongoose.connect(process.env.Url_Mongodb)


/// register
app.post('/register',async ( req, res)=>{
    const {username,password,name}=req.body;    
    try{const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
            name,
        })
        res.json(userDoc)
    }catch(err){
        res.status(400).json(err)
    }
})

/// login
app.post('/login', async ( req, res) =>{
    const { username, password,} = req.body
    const userDoc= await User.findOne({username})
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if(passOk){
            //login
            jwt.sign({username, id:userDoc._id,},secret,{},(err,token)=>{
                if(err) throw err            
                res.cookie('token', token).json(
                {
                    id:userDoc._id,
                    username,
                    
                }
                )
            })
        } else res.json('Username and Password wrong')
    }else res.json('Username and Password wrong')   
})

/// logout
app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok')
})


/// Create Blog
/// Blog Cafe
app.post('/createblogcafe', uploadfile.single('file'),async(req,res)=>{
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)
    
    const {token}=req.cookies

    jwt.verify(token, secret,{},async (err,info)=>{
        if(err) throw err
        const{title,content} =req.body
        const postDoc = await CreateBlogCafe.create({
            title,
            content,
            coverUrl:newPath,
            author:info.id,
        })
        res.json(postDoc)
    })    
})

/// Blog Dessert
app.post('/createblogdessert', uploadfile.single('file'),async(req,res)=>{
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)
    
    const {token}=req.cookies

    jwt.verify(token, secret,{},async (err,info)=>{
        if(err) throw err
        const{title,content} =req.body
        const postDoc = await CreateBlogDessert.create({
            title,
            content,
            coverUrl:newPath,
            author:info.id,
        })
        res.json(postDoc)
    })    
})
/// End CreateBlog



//Post

app.post('/postCa/:id', async(req,res)=>{
    const {id} = req.params
    const posDoc = await CreateBlogCafe.findById(id).populate('author')
    res.json(posDoc)
})

app.post('/postDes/:id', async(req,res)=>{
    const {id} = req.params
    const posDoc = await CreateBlogDessert.findById(id).populate('author')
    res.json(posDoc)
})
//end Post

// EditPost

app.get('/postEditCa/:id', async(req,res)=>{
    const {id} = req.params
    const posDoc = await CreateBlogCafe.findById(id).populate('author',['name'])
    res.json(posDoc)
})

app.get('/postEditDes/:id', async(req,res)=>{
    const {id} = req.params
    const posDoc = await CreateBlogDessert.findById(id).populate('author',['name'])
    res.json(posDoc)
})

//end Edit



// Page
app.get('/readblogca', async(req,res)=>{
    res.json(await CreateBlogCafe.find().sort({createdAt:-1}))
})

app.get('/readblogdes', async(req,res)=>{
    res.json(await CreateBlogDessert.find().sort({createdAt:-1}))
})

// end Page

app.get('/profile',(req,res)=>{
    const {token}=req.cookies
    if(token){
        jwt.verify(token, secret,{},async(err,userinfo)=>{
            if(err) throw err
            const userData = await User.findById(userinfo.id);
            const {name , username , id} = userData;
            res.json({name , username , id})
        })
    } else res.json(null)    
})

// Put Blog
//cafe
app.put('/putblogCa', uploadfile.single('file'),async(req,res)=>{
    let newPath =null
    if(req.file){
        const {originalname, path} = req.file
        const parts = originalname.split('.')
        const ext = parts[parts.length - 1]
        newPath = path + '.' + ext
        fs.renameSync(path, newPath)
    }

    const {token}=req.cookies
    jwt.verify(token, secret,{},async (err,info)=>{
        const {id, title, content} = req.body
        const postDoc = await CreateBlogCafe.findById(id)
        const isAut = JSON.stringify(postDoc.author) === JSON.stringify(info.id)

        if(!isAut) return res.status(400).json("you are not the author")
        await postDoc.updateOne({
        title,
        content,
        coverUrl : newPath ? newPath :postDoc.coverUrl
        })
        res.json(postDoc)
    })
    
})

app.put('/putblogDes', uploadfile.single('file'),async(req,res)=>{
    let newPath =null
    if(req.file){
        const {originalname, path} = req.file
        const parts = originalname.split('.')
        const ext = parts[parts.length - 1]
        newPath = path + '.' + ext
        fs.renameSync(path, newPath)
    }

    const {token}=req.cookies
    jwt.verify(token, secret,{},async (err,info)=>{
        const {id, title, content} = req.body
        const postDoc = await CreateBlogDessert.findById(id)
        const isAut = JSON.stringify(postDoc.author) === JSON.stringify(info.id)

        if(!isAut) return res.status(400).json("you are not the author")
        await postDoc.updateOne({
        title,
        content,
        coverUrl : newPath ? newPath :postDoc.coverUrl
        })
        res.json(postDoc)
    })
    
})


//end Put


// Delete

app.delete('/deleteCa/:id',async(req,res)=>{
    const {id} = req.params
    res.json(await CreateBlogCafe.deleteOne({_id:id}))
})

app.delete('/deleteDes/:id',async(req,res)=>{
    const {id}=req.params
    res.json(await CreateBlogDessert.deleteOne({_id:id}))
})

//end Delete





app.listen(4000,()=>{
    console.log("Run on port 4000")
});