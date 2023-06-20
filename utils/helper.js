import useSWR from "swr";

export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

export const useFetch = (path) => {
  const { data, error } = useSWR(`/api/${path}`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
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
export async function sendPostRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    console.error(response.status);
  }
}
export async function sendPatchRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "PATCH",
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
