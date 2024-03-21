import mongoose from 'mongoose';
export const Trabaja_enSchema = new mongoose.Schema(
  {
    id_trabajo: { type: String, required: true },
    id_empleado: { type: String, required: true },
    id_proyecto: { type: String, required: true },
    empleado: [{ type: mongoose.Schema.Types.ObjectId, ref: 'empleado' }],
    proyecto: [{ type: mongoose.Schema.Types.ObjectId, ref: 'proyecto' }],

  },
  {
    timestamps: true,
  },
);