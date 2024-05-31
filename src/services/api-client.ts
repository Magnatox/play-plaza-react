import axios, {AxiosRequestConfig} from "axios";

export interface FetchRespons<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd989457e00946d49de157edc22eba94",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoing: string) {
    this.endpoint = endpoing;
  }

  async getAll(config?: AxiosRequestConfig) {
    const res = await axiosInstance.get<FetchRespons<T>>(this.endpoint, config);
    return res.data;
  }
}

export default APIClient;
