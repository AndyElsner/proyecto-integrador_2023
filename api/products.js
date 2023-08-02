import config from '../config.js';
// import Model from '../models/products-mem.js';
// import Model from '../models/products-fs.js';
// import Model from '../models/products-mongodb.js';
import Model from '../models/products.js';

// const model = new Model();
// const model = Model.get('MEMORY');
// const model = Model.get('FILE SYSTEM');
// const model = Model.get('MONGODB');
const model = Model.get(config.PERSISTENCE_TYPE);
// creates PARA TESTING:
// await model.createProduct({ "name": "Araña Robot","price": 25.000", "stock": 20, "brand": "Spid Fire", "category": "Robot", "shortDescription": "Araña Mecánica", "longDescription": "Diseño fantástico con función de pulverización de niebla: la araña puede pulverizar niebla con luz roja cada varios segundos, como si el fuego brotara de la boca. Hay una caja de agua incorporada en la cabeza, y solo necesita usar la botellita de plástico provista para llenar el agua en el orificio.", "ageFrom": + 6, "ageUpTo": 12, "ageUnit": "años", "mainPhoto": "1-arañarobot.jpg", "id": "1"},
// await model.createProduct({ "name": "Blue Jurassic Park", "price": 18.000, "stock": 25, "brand": "Mattel", "category": "Dinosaurios", "shortDescription": "Muñeco Jurassic Park", "longDescription": "Con alrededor de 14 puntos de articulación e increíbles detalles auténticos de la película, incluyendo color y textura de la cabeza a los pies (y la cola ), estas figuras están listas para dominar el centro de atención.Construidas a escala de 3.75 pulgadas.Producto importado 100% original sin caja"", "freeShipping": true, "ageFrom": 8, "ageUpTo": 12, "ageUnit": "años", "mainPhoto": "2-blue-jurassic-park.jpj.jpg", "id": "2"
// await model.createProduct({ "name": "Cubo-Laberinto", "price": 5.000, "stock": 33, "brand": "Rubik's", "category": "Juegos de mesa", "shortDescription": "Juego de lógica", "longDescription": "CUBO LABERINTO MÁGICO 3D 6 CARAS / 6 NIVELES DE DIFICULTAD 720° 45mm. Es un juguete didáctico y de ingenio para practicar la agilidad mental, memoria y mejorar habilidades de manos. Una prueba de paciencia, perseverancia y coordinación mano-ojo. Se trata de hacer un recorrido continuo a través del laberinto de seis lados dentro del hueco.", "freeShipping": false, "ageFrom": 3, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "3-cubolaberinto.jpg", "id": "3"
// await model.createProduct({ "name": "Disfraz Spiderman", "price": 32.000, "stock": 28, "brand": "NewToy's", "category": "Disfraz", "shortDescription": "Disfraz", "longDescription": "Disfraz Spiderman ORIGINAL Marvel con Licencia de NewToy's. Acompaña a Spiderman a una nueva aventura con el disfraz spiderman! El disfraz incluye mono y capucha estampados. Viene en 3 talles (ver tabla con medidas).", "freeShipping": true, "ageFrom": 3, "ageUpTo": 10, "ageUnit": "años", "mainPhoto": "4-disfraz-spiderman.jpg", "id": "4"
// await model.createProduct({ "name": "Funko Hisoka", "price": 9.500, "stock": 18, "brand": "Funko", "category": "Coleccionable", "shortDescription": "Figura Coleccionable", "longDescription": "Personaje Hisoka. Número de la figura de acción: 652. Altura: 16 cm. Profundidad: 12 cm. Ancho: 10 cm. Materiales: Vinilo", "freeShipping": true, "ageFrom": 5, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "5-funkohisoka.jpg", "id": "5"
// await model.createProduct({ "name": "Funko Killua", "price": 9.500, "stock": 20, "brand": "Funko", "category": "Coleccionable", "shortDescription": "Figura Coleccionable", "longDescription": "Personaje Kilua. Número de la figura de acción: 1156. Altura: 16 cm. Profundidad: 12 cm. Ancho: 10 cm. Materiales: Vinilo", "freeShipping": false, "ageFrom": 5, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "6-funkokillua.jpg", "id": "6"
// await model.createProduct({ "name": "Funko Todoroki", "price": 9.500, "stock": 15, "brand": "Funko", "category": "Coleccionable", "shortDescription": "Figura Coleccionable", "longDescription": "Personaje Todoroki. Número de la figura de acción: 372. Altura: 16 cm. Profundidad: 12 cm. Ancho: 10 cm. Materiales: Vinilo", "freeShipping": true, "ageFrom": 5, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "7-funkotodoroki.jpg", "id": "7"
// await model.createProduct({ "name": "Hawk", "price": 25.000, "stock": 20, "brand": "Banpresto", "category": "Coleccionable", "shortDescription": "Figura Coleccionable", "longDescription": "Impresionante Estatua de Boku No Hero Academy original de Banpresto. inspirada en el famoso anime. De unos 17 cms de alto aproximadamente (incluyendo la Base), excelentes detalles y nivel de construcción increible, estatua fija, con base. La misma incluye su caja de origen. Ideal para fanáticos y coleccionistas, para regalar o regalarse, una pieza única que no podes dejar de tener", "freeShipping": true, "ageFrom": 10, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "8-hawk.jpg", "id": "8"
// await model.createProduct({ "name": "Indominus Rex - Jurassic Park",  "price": 33.250, "stock": 22, "brand": "Mattel", "category": "Dinosaurios", "shortDescription": "Muñeco Jurassic Park", "longDescription": "Inspirado en Jurassic World, este tamaño más grande (aprox. 8 pulgadas de alto y 23 pulgadas de largo), Destroy 'N Devour Indominus Rex cuenta con escamas blancas fantasmas, dientes viciosos y antebrazos largos como daga. Pulsa el botón en la parte posterior para activar el movimiento del brazo y efectos de sonido realistas. Pulsa el botón epara activar el corte de la mandíbula y sonidos rugidos.", "freeShipping": true, "ageFrom": 6, "ageUpTo": 12, "ageUnit": "años", "mainPhoto": "9-indominusrex.jpg", "id": "9"
// await model.createProduct({ "name": "Jenga de Disney", "price": 7.800, "stock": 30, "brand": "Hasbro", "category": "Juegos de mesa", "shortDescription": "Juego de ingeio", "longDescription": "Classic Jenga jugar con un toque fresco Disney Frozen. Incluye figura de Elsa. Niños puede jugar solo o en un grupo. Los jugadores construir castillos de Elsa. Incluye marco de Palacio de hielo, Ice Palace, balcón, 23 Jenga bloques de hielo, Elsa figure, varita copo de nieve, Die, tarjeta de configuración, y guía de juego.", "freeShipping": false, "ageFrom": 6, "ageUpTo": 99, "ageUnit": "años", "mainPhoto": "10-jenga-disney.jpg", "id": "10"



////////////////////////////////////////////////////////////////////////////////
//                                 API Get All                                //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async () => {
    const products = await model.getProducts();
    return products;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API Get One                                //
////////////////////////////////////////////////////////////////////////////////

const getProduct = async id => {
    const product = await model.getProduct(id);
    return product;
}

////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createProduct = async product => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Update                                //
////////////////////////////////////////////////////////////////////////////////

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Delete                                //
////////////////////////////////////////////////////////////////////////////////

const deleteProduct = async id => {
    const deletedProduct = await model.deleteProduct(id);
    return deletedProduct;
};


export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};