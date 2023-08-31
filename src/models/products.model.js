import mongoose from 'mongoose';

const userCollection = 'productos';



//definimos el schema

const userSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    estatus: true,
    thumbnail: String,
    code:  String,
    stock: Number
    
})

//Definir el modelo para enlazar la coleccion y el esquema.
//lo va a usar en el router
//En los parametros el 1ro es la coleccion y el segundo el esquema

export const userModel = mongoose.model(userCollection, userSchema);