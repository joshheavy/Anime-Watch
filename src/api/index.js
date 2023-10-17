import axios from "axios";

const API = axios.create({
    baseURL: "https://kitsu.io/api/edge",
    headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
    },
});


export const GET = async (url, headers) => await API.get(url, {headers});