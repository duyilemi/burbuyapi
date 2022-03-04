import axios from "axios";

const BASE_URL = "https://burbuyme.herokuapp.com";
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .user
// );
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser?.token;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
