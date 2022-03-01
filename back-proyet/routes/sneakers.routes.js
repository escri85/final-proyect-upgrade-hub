const express = require('express');
const SneakersModel = require('../models/Sneakers');
const router = express.Router();

router.get('/sneakers', async(req, res, next) =>{
    try{
        const results = await SneakersModel.find();
        console.log(results);
        return res.status(200).json(results);
    }catch(error){
        return next(error);
    }
});

router.post('/sneakers', async (req, res, next) =>{
    try{
        const {title, description, price, stock, shoppingFrom, image, rating, categorie, subcategorie} = req.body;
        const newSneakers = new SneakersModel({
            title,
            description,
            price,
            stock,
            shoppingFrom,
            image,
            rating,
            categorie,
            subcategorie
        })
        console.log('Nuevas zapatillas creadas');
        const sneakersCreated = await new newSneakers.save();
        console.log('Zapatillas añadidas')
        return res.status(201).json(sneakersCreated);
    } catch(error){
        return next(error);
    }
})


router.delete('/sneakers/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        await SneakersModel.findByIdAndDelete(id);
        return res.status(200).json('Zapatilla eliminada');
    }catch(error){
        return next(error);
    }
})

module.exports = router;