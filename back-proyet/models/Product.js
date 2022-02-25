const mongoose =require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    stock:{type:String,required:true},
    shippingFrom:{type:String,required:true}
},{
    timestamps:true

})

const ProductModel = mongoose.model("Products",productSchema)

module.exports = ProductModel;