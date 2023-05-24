import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    console.log("Anfrage-da");
    const places = await Places.find();
    return response.status(200).json(places);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
