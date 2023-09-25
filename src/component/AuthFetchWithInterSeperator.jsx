import axios from "axios";
import swal from "sweetalert";

const AuthFetchWithInterSeperator = axios.create({
    baseURL : "https://real-pear-fly-kilt.cyclic.app"
})

let ApiToken = localStorage.getItem("ApiToken");
console.log(ApiToken);

AuthFetchWithInterSeperator.interceptors.request.use((request)=>{
    console.log("Request set");
    request.headers["Accept"] = "application/json";
    request.headers["Authorization"] = `bearer ${ApiToken}`;
    return request;
},(error)=>{
   return Promise.reject(error);
})

AuthFetchWithInterSeperator.interceptors.response.use((response)=>{
    console.log("Got response");
    return response;
},(error)=>{
    console.log(error.response);
    if (error.response.status === 401) {
        swal("Not Found");
    }
    if (error.response.status === 404) {
        swal("Not Found");
    }
    return Promise.reject(error);
})

export default AuthFetchWithInterSeperator;