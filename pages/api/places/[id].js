// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  const places = await Places.findById(id);

  if (!Places) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(places);
}
