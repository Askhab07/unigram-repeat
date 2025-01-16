import axios from 'axios';
import Cookies from 'js-cookie';

export const baseService = axios.create({baseURL: 'https://unigram-39h3.onrender.com'});

export const setTokenBaseService = () => {
    baseService.defaults.headers.common.Authorization = 'Bearer ' + Cookies.get('token')
}