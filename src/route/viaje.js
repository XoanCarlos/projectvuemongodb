import express from 'express';
const router = express.Router();

// importar el modelo viaje
import Viaje from '../models/viaje';

// Agregar un viaje
router.post('/nuevo-viaje', async(req, res) => {
    const body = req.body;
    try {
        const viajeDB = await Viaje.create(body);
        res.status(200).json(viajeDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error en viaje.js',
            error
        })
    }
});

//get con un parámetro
router.get('/viaje/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const viajeDB = await Viaje.findOne({_id});
        res.json(viajeDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los documentos
router.get('/viaje', async(req, res) => {
    try {
        const viajeDb = await Viaje.find();
        res.json(viajeDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

router.delete('/viaje/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const viajeDb = await Viaje.findByIdAndDelete({_id});
        if(!viajeDb){
            return res.status(400).json({
                mensaje: 'No se encontró el viaje con el id indicado',
                error
            })
        }
        res.json(viajeDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Put actualizar un viaje
router.put('/viaje/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const viajeDb = await Viaje.findByIdAndUpdate(
            _id,
            body,
            {new: true});
        res.json(viajeDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Exportamos la configuración de express app
module.exports = router;
