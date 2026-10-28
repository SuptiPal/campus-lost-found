const mongoose = require('mongoose');
const schema = new mongoose.Schema({title:{type:String,required:true},type:{type:String,enum:['lost','found'],required:true},category:{type:String,required:true},location:{type:String,required:true},description:{type:String,default:''},contactName:{type:String,required:true},ownerId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},status:{type:String,enum:['open','resolved'],default:'open'}},{timestamps:true});
module.exports = mongoose.model('Item',schema);
