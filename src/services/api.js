import ES6Promise from "es6-promise-promise";
import axios from "axios";

ES6Promise.polyfill();

export const fetch = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  responseType: "json",
});

fetch.interceptors.request.use(
  (response) => {
    const config = response;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

fetch.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    if (response.status >= 500 && response.status < 510) {
      window.location.href = "/error";
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default fetch;
