import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const plants = await Plant.find();
      return response.status(200).json(plants);
    } catch (error) {
      return response.status(405).json({ message: "Method not allowed" });
    }
  } else if (request.method === "POST") {
    try {
      const plantData = request.body.newData;
      await Plant.create(plantData);

      response.status(201).json({ status: "Plant created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else if (request.method === "PATCH") {
    const { data, options } = request.body;
    const updatedPlant = await Plant.findByIdAndUpdate(
      id,
      data.update,
      options
    );
    response.status(200).json(updatedPlant);
  } else if (request.method === "DELETE") {
    try {
      const { id } = request.body;
      await Plant.findByIdAndRemove(id);

      response.status(200).json({ status: "Plant deleted" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
