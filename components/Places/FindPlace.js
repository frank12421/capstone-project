import { useOnePlace } from "@/utils/helper";

export default function FindPlace({ locationId }) {
  const location = useOnePlace(locationId);
  if (!location.data) {
    return null;
  } else {
    return <>{location.data.name}</>;
  }
}
