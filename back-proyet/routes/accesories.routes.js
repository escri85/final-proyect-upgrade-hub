const express = require('express');
const AccessoriesModel = require('../models/Accessories');
const router = express.Router();


router.get('/accessories', async(req, res, next) =>{
    try{
        const results = await AccessoriesModel.find();
        console.log(results);
        return res.status(200).json(results);
    } catch(error){
        return next(error);
    }
});

router.post('/accessories', async (req, res, next) =>{
    console.log("entro en el post");
    try{
        const {title, description, price, stock, shoppingFrom, image, rating, categorie} = req.body;
        const newAccessory = new AccessoriesModel({
            title,
            description,
            price,
            stock,
            shoppingFrom,
            rating,
            categorie,
            image
        });
        console.log('Nuevo accesorio creado');
        const accessoryCreated = await newAccessory.save();
        console.log('Accesorio añadido');
        return res.status(201).json(accessoryCreated);
    }catch(error){
        return next(error);
    }
})

router.delete('/accessories/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        await AccessoriesModel.findByIdAndDelete(id);
        return res.status(200).json('Accesorio eliminado');
    }catch(error){
        return next(error);
    }
})

module.exports = router;