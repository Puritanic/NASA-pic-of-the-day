import axios from "axios";

export default function getData() {
  const API_KEY = "kWsqKhEFtAOipfn3bfh0V33JdBQ33k3bmxQ6DKtH";
  const END_POINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  const request = axios.get(END_POINT);

  return {
    type: "GET_DATA",
    payload: request
  };
}
