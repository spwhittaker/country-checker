import axios from "axios";

export const defaultSearch = axios.create({
  baseURL: "https://restcountries.com/v3.1/all/",
  responseType: "json",
});

export const nameSearch = axios.create({
  baseURL: "https://restcountries.com/v3.1/name/",
  responseType: "json",
});
