const express = require('express');
const ManProducts = require('../models/ManProducts');
const router = express.Router();
const { isAdmin } = require('../middlewares/auth.middleware');

router.get('/manproducts', async (req, res, next) =>{
    try{
        const results = await ManProducts.find();
        return res.status(200).json(results);
    }catch(error){
        return next(error);
    }
});

router.post('manproducts', async(req, res, next) =>{
    try{
        const {title, description, price, stock, shoppingFrom, image, rating, categorie} = req.body;
        const newManProduct = new ManProducts({
            title,
            description,
            price,
            stock,
            shoppingFrom,
            rating,
            categorie,
            image
        });
        const manProductCreated = await newManProduct.save();
    }catch(error){
        return next(error);
    }
})

router.delete('/manproducts/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        await ManProducts.findByIdAndDelete(id);
        return res.status(200).json('Producto de hombre eliminado')
    }catch(error){
        return next(error);
    }
})

router.put('/man/edit/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        const {stock} = req.body;
        const newAccessory = await ManProducts.findByIdAndUpdate(id,{$set:{stock: stock}});
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});


router.put('/man/delete/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        console.log(id);
        const newAccessory = await ManProducts.findByIdAndDelete(id);
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});

module.exports = router;