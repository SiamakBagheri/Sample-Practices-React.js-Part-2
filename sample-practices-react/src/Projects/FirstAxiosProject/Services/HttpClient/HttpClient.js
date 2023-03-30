import axios from "axios";

// فانکشنال

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios.defaults.headers.common["Authorization"] = "S7w8E9";

export function Get(url, config = {}) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function Post(url, data, config) {
  return axios
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

// گلس کامپوننت

export class HttpClient {
  constructor(config = {}) {
    this.service = axios.create({
      ...config,
      baseURL: config.baseURL || "https://jsonplaceholder.typicode.com/",
    });
  }

  Get(url, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, config)
        .then((response) => response.data)
        .catch((error) => console.log(error));
    });
  }

  Post(url, data, config) {
    return axios
      .post(url, data, config)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
}
