import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const exptErr =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!exptErr) {
    console.log("Unexpected error : ", error.response);
  }
  if (error.response) {
    console.log("error happen");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
