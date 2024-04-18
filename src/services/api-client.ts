import axios, {AxiosRequestConfig} from "axios";

export interface FetchRespons<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "eaba30ac3cf24c0494b48e7488ff4867",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoing: string) {
    this.endpoint = endpoing;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance.get<FetchRespons<T>>(this.endpoint, config).then((res) => res.data);
  }
}

export default APIClient;
