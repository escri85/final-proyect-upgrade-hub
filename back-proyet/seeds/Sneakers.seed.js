const mongoose = require('mongoose');
const {
    DB_URL,
    CONFIG_DB
} = require('../config/db');
const SneakersModel = require('../models/Sneakers');

const sneakersProductsArray = [
    {
        "title": "Nike Dunk High Retro",
        "description": "El icono del baloncesto de los 80, creado para la cancha y adaptado al estilo urbano, vuelve con revestimientos brillantes y los colores universitarios de las zapatillas originales. Con su diseño clásico de baloncesto, las Nike Dunk High Retro llevan de nuevo el estilo vintage de los 80 a las calles. Su zona del tobillo de perfil alto y acolchada incorpora un look clásico y ofrece comodidad.",
        "price": 109.99,
        "stock": 10,
        "shoppingFrom": "España",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/22821215-b39b-4517-b5de-05527dcdc4ce/dunk-high-retro-zapatillas-dlXbK3.png",
        "rating": 4.9,
        "categorie": "Sneakers"
    },
    {
        "title": "Nike Air Force 1 '07 LV8",
        "description": "Con un diseño que combina la diversión retro con el icónico estilo de baloncesto, las Nike Air Force 1 '07 LV8 ofrecen un nuevo giro en lo que mejor conoces: revestimientos cosidos, colores llamativos y la cantidad perfecta de estilo de baloncesto para ser el centro de atención.",
        "price": 119.99,
        "stock": 15,
        "shoppingFrom": "Francia",
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7276b8ce-67a4-45fd-8e19-ed6bb0f7772b/air-force-1-07-lv8-zapatillas-4hl24v.png",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Forum Low ",
        "description": " Esta versión luce un diseño con los colores clásicos que podría lucir cualquier equipo en la cancha y que nos recuerda que no estaríamos donde estamos sin la ayuda de los demás. La parte superior de piel blanca y los detalles en contraste conservan intacto el legado de la Forum.",
        "price": 100,
        "stock": 33,
        "shoppingFrom": "Alemania",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75aee7eb0fc343d484c9adf30019d225_9366/Zapatilla_Forum_Low_Blanco_GY8556_01_standard.jpg",
        "rating": 3.1,
        "categorie": "Sneakers",
    },
    {
        "title": "Adidas NMD_R1 V2",
        "description": "Esta zapatilla presenta una parte superior fabricada con un hilo reciclado de alto rendimiento creado con al menos un 50% de Parley Ocean Plastic —un material reinventado a partir de residuos plásticos recogidos en zonas costeras para evitar que contaminen nuestros océanos. El otro 50% del hilo es poliéster reciclado.",
        "price": 140,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/65462195082b4a8aaa6bad6b008b2da0_9366/Zapatilla_NMD_R1_V2_Blanco_GX6368.jpg",
        "rating": 4.5,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Zoom Pegasus 38",
        "description": "Sonríe con cada kilómetro.Las Pegasus 38 son un clásico de gran eficacia que ofrece una mayor comodidad y elasticidad para que disfrutes de tus carreras más largas.Los tonos neutros rinden homenaje al amor por la naturaleza y el aire libre.Los simpáticos ojos del logotipo Swoosh le dan un toque alegre a estas zapatillas de gran ligereza.",
        "price": 124,
        "stock": 4,
        "shoppingFrom": "Francia",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c062b952-d202-4e33-8be2-7fc2c5e81beb/air-zoom-pegasus-38-zapatillas-de-running-carretera-bWMjP2.png",
        "rating": 5.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Air Jordan 1 Hi FlyEase",
        "description": "Las Air Jordan 1 Hi FlyEase combinan el codiciado estilo de las primeras zapatillas exclusivas de Michael Jordan con un sistema de entrada rápido y sencillo con una sola mano.No hay cordones, solo una cremallera envolvente y dos correas para un ajuste personalizable.",
        "price": 159,
        "stock": 23,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef30042c-c7c1-40a4-896c-e9a4b0dd24e0/air-jordan-1-hi-flyease-zapatillas-F1Rw6B.png",
        "rating": 5.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Max 97 SE",
        "description": "Las Max Air cambiaron las reglas del juego en el 87. Ahora, celebramos su aniversario esmeralda (¡35 años!) con las Nike Air Max 97 SE. Los estampados y colores Emerald resaltan este gran momento para la historia, y mantienen las clásicas líneas de diseño curvo y la amortiguación del modelo original.",
        "price": 189.99,
        "stock": 12,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5ecc4749-74d4-4adb-9889-445c9dac4abd/air-max-97-se-zapatillas-FPxPtp.png",
        "rating": 4.1,
        "categorie": "Sneakers",
    },
    {
        "title": "ADIDAS Superstar",
        "description": "Diseño iconico para unas zapatillas hechas en piel en su parte exterior y con tela para un interior confortable.",
        "price": 49.95,
        "stock": 40,
        "shoppingFrom": "España",
        "image": "https://dakonda.com/57169-large_default/adidas-superstar-zapatillas.jpg",
        "rating": 3.9,
        "categorie": "Sneakers",
    },
    {
        "title": "ADIDAS Stan Smith",
        "description": "La zapatilla adidas Stan Smith lleva un buen tiempo dando de qué hablar. Para ser exactos, desde 1971. Adaptarse a los cambios está en su ADN. Nació para las pistas de tenis y ahora es un diseño urbano y versátil que puedes ponerte cuando quieras. Esta versión actualiza los colores clásicos y los materiales del modelo original.",
        "price": 100,
        "stock": 32,
        "shoppingFrom": "España",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c1f600512d8c4b1da89dad7c00f57ac8_9366/Zapatilla_Stan_Smith_Blanco_GW0486_01_standard.jpg",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Chuck Taylor All Star Leather",
        "description": "Están confeccionadas con un tejido de piel supersuave, y puedes hacer que sean tan elegantes o modernas como quieras. Tú escribes la historia.",
        "price": 80,
        "stock": 33,
        "shoppingFrom": "España",
        "image": "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw6b9345d3/images/a_107/132173C_A_107X1.jpg?sw=2000",
        "rating": 4.9,
        "categorie": "Sneakers",
    },
    {
        "title": "Vans Ward Suede",
        "description": "SUELA: Es la parte inferior de la zapatilla que toca el suelo.",
        "price": 38,
        "stock": 40,
        "shoppingFrom": "Francia",
        "image": "https://m.media-amazon.com/images/I/41MAOKcfhXL._AC_.jpg",
        "rating": 3.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Morrison Bel-Air",
        "description": "Las Morrison Nineties Bel-Air es un homenaje a la serie noventera “El Principe de Bel-Air” por sus colores vivos, atrevidos y llamativos. Muy de la onda de los 90 con un estampado muy vintagero. Está fabricadas en serraje multicolor, los cordones son de algodón blanco y la suela color tocino.",
        "price": 75,
        "stock": 20,
        "shoppingFrom": "España",
        "image": "https://morrisonshoes.com/1336-large_default/bel-air.jpg",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Veja Esplar",
        "description": "Algodón procedente de agricultura biológica. Cultivado sin pesticidas ni productos químicos, el algodón procedente de agricultura orgánica protege el suelo, el agua y la salud de aquellos que lo cosechan. También favorece la preservación de nuestro planeta y de nuestra salud.",
        "price": 99,
        "stock": 4,
        "shoppingFrom": "Francia",
        "image": "https://cdn.laredoute.com/products/f/8/d/f8d9733066ecdc25cbdd491482491977.jpg?imgopt=twic&twic=v1/cover=700x700",
        "rating": 3.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Puma Suede VTG GTX",
        "description": "Desde su llegada a escena en 1968, la colección Suede ha cambiado las reglas del juego y ha sido utilizada por figuras icónicas de varias generaciones. Y este modelo, diseñado...",
        "price": 99,
        "stock": 40,
        "shoppingFrom": "España",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/382790/01/sv01/fnd/EEA/fmt/png/Zapatillas-Suede-VTG-GTX",
        "rating": 4.0,
        "categorie": "Sneakers",
    },
    {
        "title": "MUNICH ALPHA 65",
        "description": "Zapatillas deportivas de hombre Munich en blanco con detalles a contraste. Sneaker de color blanco con detalles en gris, gris oscuro y ocre. Contraste de materiales en el corte destacando. Cierre mediante cordones. Tirador en la parte trasera. Estabilizador de TPU inyectado en la talonera con logo grabado. ",
        "price": 100,
        "stock": 24,
        "shoppingFrom": "Alemania",
        "image": "https://dhb3yazwboecu.cloudfront.net/180/V5/FASHION/8410065-01-L.jpg",
        "rating": 3,
        "categorie": "Sneakers",
    },
    {
        "title": "DC Trase",
        "description": "parte superior: parte superior en ante, Tejido interior de malla, Logo HD estampado , Construcción vulcanizada para sentir mejor la tabla y la flexibilidad de la suela",
        "price": 35,
        "stock": 4,
        "shoppingFrom": "Alemania",
        "image": "https://images.boardriders.com/globalGrey/dcshoes-products/all/default/xlarge/adys300652_dcshoes,p_2gg_frt2.jpg",
        "rating": 3,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Zoom SuperRep 3",
        "description": "Libera toda tu potencia en cada repetición con unas zapatillas rediseñadas que aportan sujeción y estabilidad a cada movimiento.Son más ligeras que las versiones anteriores para que puedas mantener un ritmo alto durante los circuitos de entrenamientos y las clases de HIIT.Además, la amortiguación Zoom Air y la flexibilidad en la planta del pie son ideales para cada zancada, paso y salto",
        "price": 130,
        "stock": 32,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f15f60f-151f-4e0f-8625-d28491814cb6/air-zoom-superrep-3-zapatillas-las-clases-de-hiit-bjJmZ8.png",
        "rating": 4,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Max 90 Premium",
        "description": "No hay nada tan cómodo.No hay nada tan demostrado.Las Nike Air Max 90 Premium se mantienen fieles a sus raíces con la icónica suela tipo gofre, los revestimientos cosidos y los clásicos detalles de TPU.Los detalles de cadena extraíbles añaden un toque de los 90 con la cantidad perfecta de brillo.",
        "price": 160,
        "stock": 40,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f3a5907b-fc05-49ee-8d20-9855b5d8b216/air-max-90-zapatillas-Z8GT9f.png",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Force 1 Pixel",
        "description": "Siempre has dado en el clavo. Por lo que las Nike Air Force 1 Pixel son perfectas para ti. La suela exterior distorsionada y la mediasuela elevada con detalles pixelados de gran tamaño añaden un toque futurista.",
        "price": 112,
        "stock": 4,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a2ba5c4d-2746-42e6-a42f-677c6bcefba7/air-force-1-pixel-zapatillas-4Hcq7k.png",
        "rating": 5,
        "categorie": "Sneakers",
    },
]


const URL = "mongodb://localhost:27017/ecomerce";

mongoose.connect(URL, CONFIG_DB)
.then(async () =>{
    console.log('Se está ejecutando la seed de zapatillas, todo ok!');
    const sneakersProductsContent = await SneakersModel.find();
    (sneakersProductsContent) ? await SneakersModel.collection.drop() : '';
})
.catch(error => console.log("Error buscando en la DB", error))
.then(async () =>{
    await SneakersModel.insertMany(sneakersProductsArray);
    console.log('Añadida las nuevas zapatillas');
})
.catch(error => console.log('Error añadiendo las nuevas'))
.finally(() => mongoose.disconnect());

