import { useAllPlaces } from "@/utils/helper";
import PlaceCardLong from "../PlaceCardLong";

export default function ShowPlaceList() {
  const { data: places, error, isLoading } = useAllPlaces();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {places.map((place) => {
        return <PlaceCardLong key={place._id} place={place} />;
      })}
    </>
  );
}
