const express = require('express');
const ManProducts = require('../models/ManProducts');
const router = express.Router();

router.get('/manproducts', async (req, res, next) =>{
    try{
        const results = await ManProducts.find();
        console.log(results);
        return res.status(200).json(results);
    }catch(error){
        return next(error);
    }
});

router.post('manproducts', async(req, res, next) =>{
    console.log("Entro en el post de manproducts");
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
        console.log('Nuevo producto de hombre creado');
        const manProductCreated = await newManProduct.save();
        console.log('Producto de hombre añadido');
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

module.exports = router;