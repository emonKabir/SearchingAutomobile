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

export default {
  getCarsList,
};
