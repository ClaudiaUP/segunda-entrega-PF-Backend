import mongoose from 'mongoose';

const userCollection = 'usuarios';



//definimos el schema

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        require: [true, 'Correo es requerido']
    }
})

//Definir el modelo para enlazar la coleccion y el esquema.
//lo va a usar en el router
//En los parametros el 1ro es la coleccion y el segundo el esquema

export const userModel = mongoose.model(userCollection, userSchema);