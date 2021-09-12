import axios from "axios";

axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';

const movieAxios = axios.create({
    baseURL: process.env.MOVIE_URL,
});

export const reqGet = (url, param) => movieAxios.get(url, { params: param });
export const reqPost = (url, param) => movieAxios.post(url, param);
export const reqPut = (url, param) => movieAxios.put(url, param);
export const reqPatch = (url, param) => movieAxios.patch(url, param);
export const reqDelete = (url, param) => movieAxios.delete(url, { params: param });

export default {
    reqGet,
    reqPost,
    reqPut,
    reqPatch,
    reqDelete,
};