const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getData = (name) => {
  return fetch(`${BASE_URL}${name}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export const findUser = (searchName) => {
  return fetch(`${BASE_URL}users?name=${searchName}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
