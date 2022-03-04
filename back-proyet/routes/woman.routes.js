const express = require('express');
const WomensProducts = require('../models/WomensProducts');
const router = express.Router();

router.get('/woman', async(req, res, next) =>{
    try{
        const results = await WomensProducts.find();
        console.log(results);
        return res.status(200).json(results);
    }catch(error){
        return next(error);
    }
});

router.post('/woman', async(req, res, next) =>{
    try{
        const {title, description, price, stock, shoppingFrom, image, rating, categorie} = req.body;
        const newWomanProduct = new WomensProducts({
            title,
            description,
            price,
            stock,
            shoppingFrom,
            rating,
            categorie,
            image
        });
        console.log('Nueva producto de mujer creado');
        const womanProductCreated = await new newWomanProduct.save();
        console.log('Nuevo producto de mujer añadido');
        return res.status(201).json(womanProductCreated);
    }catch(error){
        return next(error);
    }
});

router.delete('woman/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        await WomensProducts.findByIdAndDelete(id);
        return res.status(200).json('Producto de mujer eliminado');
    }catch(error){
        return next(error);
    }
})

module.exports = router;