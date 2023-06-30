import useSWR from "swr";

export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};
export const useAllPlants = () => {
  const { data, error } = useSWR(`/api/plants/`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export const useOnePlant = (id) => {
  const { data, error } = useSWR(`/api/plants/${id}`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export const useOnePlace = (id) => {
  const { data, error } = useSWR(`/api/places/${id}`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export const useAllPlaces = () => {
  const { data, error } = useSWR(`/api/places/`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export const useAllDates = () => {
  const { data, error } = useSWR(`/api/dates/`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export const useOneDate = (id) => {
  const { data, error } = useSWR(`/api/dates/${id}`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};

export async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: arg.method,
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    await response.json();
  } else {
    console.error(`Error: ${response.status}`);
  }
}
