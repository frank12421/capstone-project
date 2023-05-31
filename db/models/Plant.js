import mongoose from "mongoose";
const { Schema } = mongoose;

const plantSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  plantheight: { type: Number, required: false },
  cultivation_suitability: { type: String, required: true },
  fruit_shape: { type: String, required: true },
  fruit_color: { type: String, required: true },
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantSchema);

export default Plant;
