import axios from 'axios';

let apiKey = localStorage.getItem("ApiToken");
const AuthFetch = axios.create({
    baseURL: 'https://real-pear-fly-kilt.cyclic.app',
    headers: {
      Accept: 'application/json',
      Authorization : `bearer ${apiKey}`
    },
})



export default AuthFetch;