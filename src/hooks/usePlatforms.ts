import {useQuery} from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import {FetchRespons} from "./useData";
import {Platform} from "./useGames";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FetchRespons<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 1 * 1000,
    initialData: {count: platforms.length, results: platforms},
  });

export default usePlatforms;
