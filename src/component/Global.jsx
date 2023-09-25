import axios from 'axios';

let apiKey = localStorage.getItem("apiToken");

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `bearer ${apiKey}`