//Show a list of Plants for ond Place (id)
// bekommt eine ids mit der Pfalnzen id, fetch die daten dazu und gibt den Namen zurück

import { useOnePlant } from "@/utils/helper";

export default function ShortListPlants({ id }) {
  console.log(id);
  const plant = useOnePlant(id);

  if (!plant.data) {
    return null;
  } else {
    console.log("Pflanze", plant);
    //hier kommt später noch ein counter rein
    return <p>{plant.data.name}</p>;
  }
}
