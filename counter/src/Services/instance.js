import axios from "axios";

const instance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/",
    // axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN",
});

export default instance;