import { Router } from "express";
import { userModel } from "../models/products.model.js";



const router = Router();

//Lectura
router.get('/', async (req, res) => {
    try {
        let products =await userModel.find();
        console.log (products);
        res.send({result: 'success', payload: products})

    } catch (error) {
        console.error("No se pudo obtener productos con mongoose: " + error);
        res.status(500).send({ error: "No se pudo obtener productos con mongoose", messages: error });
    }
})


//Crear
router.post('/', async (req, res) => {
    try {
        let{title, description, price, category, estatus, thumbnail, code, stock} = req.body

        let product =await userModel.create({title, description, price, category, estatus, thumbnail, code, stock});
        
        res.status(201).send({result: 'success', payload: product})

    } catch (error) {
        console.error("No se pudo crear productos con mongoose: " + error);
        res.status(500).send({ error: "No se pudo crear productos con mongoose", messages: error });
    }
})

// PUT
router.put('/:id', async (req, res) => {
    try {
        let productUpdated = req.body;
        let product = await userModel.updateOne({ _id: req.params.id }, productUpdated);
        res.status(202).send(product);
    } catch (error) {
        console.error("No se pudo obtener productos con moongose: " + error);
        res.status(500).send({ error: "No se pudo obtener usuarios con moongose", message: error });
    }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let result = await userModel.deleteOne({ _id: id })
        res.status(202).send({ status: "success", payload: result });
    } catch (error) {
        console.error("No se pudo obtener usuarios con moongose: " + error);
        res.status(500).send({ error: "No se pudo obtener usuarios con moongose", message: error });
    }
})


export default router;