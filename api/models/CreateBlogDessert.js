const mongoose = require('mongoose')
const {Schema,model} = mongoose

const CreateSchema = new Schema({
    title:String,
    content:String,
    coverUrl:String,
    author:{type:Schema.Types.ObjectId,ref:'User'},
},{
    timestamps:true,
})

const CreateModel = model('CreateBlogDessert',CreateSchema)

module.exports=CreateModel