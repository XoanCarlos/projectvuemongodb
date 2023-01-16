import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const viajeSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    descripcion: String,
    viajeId: String,
    date:{type: Date, default: Date.now},
    pendiente: {type: Boolean, default: true}
});

// Convertir a modelo
const Viaje = mongoose.model('Viaje', viajeSchema);

export default Viaje;
