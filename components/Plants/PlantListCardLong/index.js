import { useAllPlants } from "@/utils/helper";
import PlantCardLong from "../PlantCardLong";

export default function PlantListCardLong() {
  const { data: plants, error, isLoading } = useAllPlants();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {plants.map((plant) => {
        return <PlantCardLong key={plant._id} plant={plant} />;
      })}
    </>
  );
}
