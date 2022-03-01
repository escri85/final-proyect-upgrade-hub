const mongoose = require('mongoose');
const {
    DB_URL,
    CONFIG_DB
} = require('../config/db');
const SneakersModel = require('../models/Sneakers');

const sneakersProductsArray = [
    {
        "title": "Nike Air Force 1 '07 LV8",
        "description": "Con un diseño que combina la diversión retro con el icónico estilo de baloncesto, las Nike Air Force 1 '07 LV8 ofrecen un nuevo giro en lo que mejor conoces: revestimientos cosidos, colores llamativos y la cantidad perfecta de estilo de baloncesto para ser el centro de atención.",
        "price": 119.99,
        "stock": 15,
        "shoppingFrom": "Francia",
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7276b8ce-67a4-45fd-8e19-ed6bb0f7772b/air-force-1-07-lv8-zapatillas-4hl24v.png",
        "rating": 4.2,
        "categorie": "Sneakers",
        "subCategorie": "woman"
    },
]


const URL = "mongodb://localhost:27017/ecomerce";

mongoose.connect(URL, CONFIG_DB)
.then(async () =>{
    console.log('Se está ejecutando la seed de zapatillas, todo ok!');
    const sneakersProductsContent = await SneakersModel.find();
    (sneakersProductsContent) ? await SneakersModel.collection.drop() : '';
})
.catch(error =>console.log('Error buscando en la DB'))
.then(async () =>{
    await SneakersModel.insertMany(sneakersProductsArray);
    console.log('Nuevas zapatillas añadidas!');
})
.catch(error =>console.log('Error añadiendo las nuevas zapatillas'))
.finally(() => mongoose.disconnect());
