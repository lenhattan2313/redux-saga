import qs from "query-string";
import axios from "../services/axios";
import { API_ENDPOINT } from "../constant";

const url = "tasks";
export const fetchListTask = (params = {}) => {
  let queryParams = "";
  Object.keys(params).length > 0 && (queryParams = `?${qs.stringify(params)}`);
  return axios.get(`${API_ENDPOINT}${url}${queryParams}`);
};
export const addTask = (data) => axios.post(`${API_ENDPOINT}${url}`, data);

export const updateTask = (data, id) => axios.put(`${API_ENDPOINT}${url}/${id}`, data);

export const deleteTask = (id) => axios.delete(`${API_ENDPOINT}${url}/${id}`);
