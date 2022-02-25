const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

//GET
    router.get('/api/worker', async (req, res) => {

        try {
            //Me traigo del modelo toda la colección, y la muestro en esta ruta
            const results = await WorkerModel.find();
            console.log(results);
            return res.status(200).json(results);
        } catch (error) {
            return next(error);
        }
    });

router.get('/api/worker/:id', async (req, res) => {
    try {
        //Busco el cliente por su id, me lo traigo por parámetros
        const {id} = req.params;

        //Busco dentro de la colección cuál coincide
        const workerFound = await WorkerModel.findById(id);

        //Lo tiro en la respuesta
        return res.status(200).json(workerFound);

    } catch (error) {
        return next(error);
    }
})

//RUTAS CITES

//GET
router.get('/api/cite', async (req, res) => {

    try {
        //Me traigo del modelo toda la colección, y la muestro en esta ruta
        const results = await CiteModel.find();
        console.log(results);
        return res.status(200).json(results);
    } catch (error) {
        return next(error);
    }
});

//POST
router.post('/api/cite', async (req, res) => {

    // 1.Creamos instancia del modelo
    // 2. Ejecutamos instancia.save() de la instancia.
    // 3. Hacemos lo que queramos con el dato
    // req.body ---> Podemos recibir cualquier cosa req.body.titulo
    // Es distinto del save de mongo

    console.log("He entrado aqui, en la ruta");
    console.log("Este es el body", req.body)

    try {

        //Me traigo del body, lo que quiero
        const {
            dni,
            type,
            date,
        } = req.body;

        const newCite = new CiteModel({
            dni,
            type,
            date,
        });
        console.log("He creado el objeto");
        const citeCreated = await newCite.save();
        console.log("persona añadida");
        return res.status(201).json(citeCreated);
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
        await CiteModel.findByIdAndDelete(id);
        return res.status(200).json('Cita eliminada');
    } catch (error) {
        return next(error);
    }
});

//PUT
// router.put('/api/:id', async (req, res, next) => {
//     try {
//         const {
//             id
//         } = req.params //Recuperamos el id de la url
//         const clientModify = new WorkerModel(req.body) //instanciamos un nuevo cliente con la información del body
//         clientModify._id = id //añadimos la propiedad _id al cliente creado
//         const clientUpdated = await WorkerModel.findByIdAndUpdate(id, clientModify)
//         return res.status(200).json(clientUpdated) //Este cliente que devolvemos es el anterior a su modificación
//     } catch (error) {
//         return next(error)
//     }
// });



module.exports = router;