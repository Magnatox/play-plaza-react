import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "eaba30ac3cf24c0494b48e7488ff4867",
  },
});
