import axios from "axios";

const api = axios.create({
    baseURL: "http://54.152.13.86:8080"
});

export default api;