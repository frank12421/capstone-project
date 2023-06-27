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
  } else if (request.method === "PATCH") {
    console.log("api/plant/id-Patch", request.body);
    const { id } = request.query;
    const { newData, options } = request.body;
    console.log("newData", newData);
    const updatedPlant = await Plant.findByIdAndUpdate(id, newData, options);
    response.status(200).json(updatedPlant);
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
