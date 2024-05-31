import {useQuery} from "@tanstack/react-query";
import platforms from "../data/platforms";
import {FetchRespons} from "../services/api-client";
import axios from "axios";

// const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd989457e00946d49de157edc22eba94",
  },
});

const fetchP = async () => {
  const res = await axiosInstance.get<FetchRespons<Platform>>("/platforms/lists/parents");
  return res.data;
};

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: fetchP,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
