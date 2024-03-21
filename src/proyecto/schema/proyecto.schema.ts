import mongoose from 'mongoose';

export const ProyectoSchema = new mongoose.Schema(
  {
    nombre_proyecto: { type: String, required: true },
    duracion: { type: String, required: true },
    cliente: { type: String, required: true },
    fecha_inicio: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

ProyectoSchema.index({ nombre_proyecto: 1 }, { unique: true });
