import mongoose from "mongoose";
const { Schema } = mongoose;

const dataSchema = new Schema({
  dateform: { type: String, required: true },
  datefrequency: { type: String },
  date: { type: String, required: true },
  time: { type: String, required: true },
  promptlist: { type: String, required: true },
  description: { type: String },
});

const dateForPlaceSchema = new Schema({
  location: { type: String, required: true },
  data: { type: dataSchema, required: true },
});

const Dates =
  mongoose.models.Dates || mongoose.model("Dates", dateForPlaceSchema);

export default Dates;
