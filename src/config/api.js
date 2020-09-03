import { create } from 'apisauce';

const baseURL = process.env.apiURL;

const STATUS_CODES = {
  unauthorized: 401
};

const api = create({
  baseURL,
  timeout: 15000
});

export default api;
