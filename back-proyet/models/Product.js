const mongoose =require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number},
    shippingFrom:{type:String},
    rate: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
},{
    timestamps:true
})

const ProductModel = mongoose.model("Products",productSchema)

module.exports = ProductModel;