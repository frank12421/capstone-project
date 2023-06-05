import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const { id } = request.query;
      const plant = await Plant.findById(id);
      response.status(200).json(plant);
    } catch (error) {
      return response.status(404).json({ status: "Not Found" });
    }
  } else if (request.method === "DELETE") {
    try {
      const { id } = request.query;
      await Plant.findByIdAndRemove(id);
      response.status(200).json({ status: "Plant deleted" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
