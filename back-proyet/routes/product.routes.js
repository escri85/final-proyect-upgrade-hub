const express = require('express');
const ProductModel = require('../models/Product');
const router = express.Router();

//GET
    router.get('/products', async (req, res, next) => {

        try {
            const results = await ProductModel.find();
            console.log(results);
            return res.status(200).json(results);
        } catch (error) {
            return next(error);
        }
    });

router.get('/products/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const productFound = await ProductModel.findById(id);
        return res.status(200).json(productFound);
    } catch (error) {
        return next(error);
    }
});

//POST
router.post('/products', async (req, res, next) => {

    console.log("Este es el body", req.body)

    try {
        const {
            title,
            description,
            price,
            stock,
            shippingFrom,
            rate,
            category,
            image
        } = req.body;

        const newProduct = new ProductModel({
            title,
            description,
            price,
            stock,
            shippingFrom,
            rate,
            category,
            image
        });
        console.log("He creado el objeto");
        const productCreated = await newProduct.save();
        console.log("producto añadido");
        return res.status(201).json(productCreated);
    } catch (error) {
        return next(error);
    }
})

//DELETE
router.delete('/api/cite/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await ProductModel.findByIdAndDelete(id);
        return res.status(200).json('Producto eliminado');
    } catch (error) {
        return next(error);
    }
});

module.exports = router;