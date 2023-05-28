import { useRouter } from "next/router";
import HeaderPlaceList from "../../Places/HeaderPlaceList";
import AllPlantsSortedtList from "../AllPlantsSortedList";
import useSWR from "swr";
import { fetcher } from "@/utils/helper";

export default function ShowAddPlantToPlaceList() {
  const router = useRouter();
  const site = router.query;

  const { data, error, isLoading } = useSWR(`/api/places/${site.id}`, fetcher);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!site.id) {
    return null;
  }
  return (
    <>
      <HeaderPlaceList placeData={data} />
      <AllPlantsSortedtList placeData={data} id={site.id} />
    </>
  );
}
