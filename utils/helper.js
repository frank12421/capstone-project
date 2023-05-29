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

export const useAllDates = () => {
  const { data, error } = useSWR(`/api/dates/`, fetcher);
  const isLoading = !data && !error;
  return { data, error, isLoading };
};
