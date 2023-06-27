import dbConnect from "@/db/connect";
import Dates from "@/db/models/Dates";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const dates = await Dates.find();
      return response.status(200).json(dates);
    } catch (error) {
      return response.status(405).json({ message: "Method not allowed" });
    }
  } else if (request.method === "POST") {
    try {
      const dates = request.body.data;
      await Dates.create(dates);

      response.status(201).json({ status: "Date created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
