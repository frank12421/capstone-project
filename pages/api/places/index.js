import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    try {
      const places = await Places.find();
      return response.status(200).json(places);
    } catch (error) {
      return response.status(405).json({ message: "Method not allowed" });
    }
  } else if (request.method === "POST") {
    try {
      const placesData = request.body;
      await Places.create(placesData);

      response.status(201).json({ status: "Place created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
