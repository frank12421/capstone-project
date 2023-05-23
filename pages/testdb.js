import dbConnect from "../db/connect";
import Plant from "../db/models/Plant";

async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const plants = await Plant.find();
    return response.status(200).json(plants);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}

// console.log(dbConnect);
// console.log(test);

export default function TestDb() {
  return <handler request="GET"></handler>;
}
