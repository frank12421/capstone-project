import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  const plant = await Plant.findById(id);

  if (!plant) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(plant);
}
