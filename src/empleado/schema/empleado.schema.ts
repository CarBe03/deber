import mongoose from 'mongoose';

export const EmpleadoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: String, required: true },
    fecha_contratacion: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

EmpleadoSchema.index({ nombre: 1 }, { unique: true });
