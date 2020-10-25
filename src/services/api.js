import Network from "./network";

const BASE_URL = `https://api.github.com/gists/public`;

export const getGistsAPI = (pageId) =>
  Network.get(`${BASE_URL}?page=${pageId}&per_page=30`);
