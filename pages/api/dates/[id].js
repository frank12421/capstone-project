import dbConnect from "@/db/connect";
import Dates from "@/db/models/Dates";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const { id } = request.query;
      const date = await Dates.findById(id);
      response.status(200).json(date);
    } catch (error) {
      return response.status(404).json({ status: "Not Found" });
    }
  } else if (request.method === "PATCH") {
    console.log("api-dates-id");
    const { id } = request.query;
    const { data, options } = request.body;
    const updatedDate = await Dates.findByIdAndUpdate(id, data, options);
    response.status(200).json(updatedDate);
  } else if (request.method === "DELETE") {
    try {
      const { id } = request.query;
      await Dates.findByIdAndRemove(id);
      response.status(200).json({ status: "Date deleted" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
