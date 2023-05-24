import mongoose from "mongoose";
const { Schema } = mongoose;

const ObjektSchema = new Schema({
  // uid: { type: String, required: true }, // Eigene UID
  plantid: { type: Schema.Types.ObjectId, ref: "Plants", required: true }, // Referenz auf ein Objekt in der "Plants"-Sammlung
  // Weitere Felder für das Objekt
});

const placesSchema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  used: { type: Number, required: false },
  lightratio: { type: String, required: true },
  location: { type: String, required: true },
  rainprotection: { type: String, required: true },
  plants: [ObjektSchema],
});

const Places = mongoose.models.Places || mongoose.model("Places", placesSchema);

export default Places;
