import { fetch } from "./api";

export const getAll = (offset = 0) => {
  return new Promise((resolve, reject) => {
    fetch
      .get(`pokemon?limit=20&offset=${offset}`)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getSingle = (name) => {
  return new Promise((resolve, reject) => {
    fetch
      .get(`pokemon/${name}`)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
