const mongoose=require('mongoose');
const schema=new mongoose.Schema({itemId:{type:mongoose.Schema.Types.ObjectId,ref:'Item',required:true},claimantId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},claimantName:{type:String,required:true},reason:{type:String,required:true},status:{type:String,enum:['pending','approved','rejected'],default:'pending'}},{timestamps:true});
module.exports=mongoose.model('Claim',schema);
