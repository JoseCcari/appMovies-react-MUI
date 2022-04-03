import axios from "axios";
const APIKEY = '6d022ee2'
const baseURL = `http://www.omdbapi.com/?apikey=${APIKEY}` //&s=${titulo}

export const apiCall = (url, data , headers,  method)=> axios ({
    method,
    url: baseURL + url,
    data,
    headers
})