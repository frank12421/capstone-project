import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  // console.log("Product/index.js/id:", id);
  const { data } = useSWR(id ? `/api/plants/${id}` : null);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <button type="button" onClick={() => router.push("/")}>
        Back to all
      </button>
    </>
  );
}
