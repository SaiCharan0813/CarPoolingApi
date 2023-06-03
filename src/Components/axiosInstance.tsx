import axios from 'axios';

const axiosInstance = axios.create();
var token;
axiosInstance.interceptors.request.use(
  (config) => {
    // Add your authorization logic here
    if(localStorage.getItem("userData")=='null' || localStorage.getItem("userData")==undefined){
        token='';
    }
    else{
        token = JSON.parse(localStorage.getItem("userData")!).jwt;
    }
     
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;