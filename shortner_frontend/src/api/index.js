import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);
export const sendUrl = (urlData) => API.post('/url', urlData);
export const getAllUrls = () => API.get('/url/getAllUrls');
export const getFilteredUrls = (queryData) => API.get(`/url/search?data=${queryData}`);
export const deleteUrl = (id) => API.delete(`/url/delete/${id}`) 