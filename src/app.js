import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routers/users.router.js'
import productsRouter from './routers/products.router.js'

//Inicializamos express
const app = express();

//Preparamos la configuracion del servidor para recibir objetos JSON
app.use (express.json());
app.use(express.urlencoded ({extended: true}));

const SERVER_PORT= 9090;

//Declaración de Routers:
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);


app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});


//Declaramos temas de coneccion con la DB  Crear la conexion con la base de datos.

const DB ='mongodb+srv://ulledclaudia:atlas2023@cluster0.s0wqmrt.mongodb.net/clase14?retryWrites=true&w=majority'

//para conectar

const connectMongoDB = async () => {
    try{

        await mongoose.connect(DB)
        console.log ("Conectado con exito a MongoDB usando Mongoose");
    }catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
}

//se necesita ejecutar.

connectMongoDB();




