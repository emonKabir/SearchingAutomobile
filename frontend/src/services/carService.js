import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "automobile";

export async function getCarsList() {
  try {
    const carsList = await http.get(apiEndPoint);
    return carsList["data"];
  } catch (error) {
    return error;
  }
}

export async function getSingleCar(id) {
  try {
    const { data } = await http.get(`${apiEndPoint}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function postCarsList(formData) {
  try {
    const { data } = await http.post(apiEndPoint, formData);
    console.log("data ", data);
    return data;
  } catch (error) {
    return error;
  }
}

export default {
  getSingleCar,
  getCarsList,
  postCarsList,
};
