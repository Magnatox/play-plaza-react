import {useQuery} from "@tanstack/react-query";
import genres from "../data/genres";
import {FetchRespons} from "../services/api-client";
import axios from "axios";
import {Platform} from "./usePlatforms";

// const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd989457e00946d49de157edc22eba94",
  },
});

const fetchG = async () => {
  const res = await axiosInstance.get<FetchRespons<Platform>>("/genres");
  return res.data;
};

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: fetchG,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
export default useGenres;
