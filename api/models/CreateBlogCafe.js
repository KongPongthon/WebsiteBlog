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

const CreateModel = model('CreateBlogCafe',CreateSchema)

module.exports=CreateModel