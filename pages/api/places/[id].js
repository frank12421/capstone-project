import dbConnect from "@/db/connect";
import Places from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;
  const place = await Places.findById(id);
  const updatedItem = request.body;

  if (!place) {
    return response.status(404).json({ status: "Not Found" });
  }

  if (request.method === "GET") {
    response.status(200).json(place);
  } else if (request.method === "PUT") {
    await Places.findByIdAndUpdate(id, updatedItem);
    response.status(200).json({ message: `Product successfully updated.` });
  } else if (request.method === "PATCH") {
    const { data, options } = request.body;
    const updatedPlace = await Places.findByIdAndUpdate(
      id,
      data.update,
      options
    );
    response.status(200).json(updatedPlace);
  }
}
