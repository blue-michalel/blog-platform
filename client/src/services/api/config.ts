import axios from 'axios';

import { responseErrorInterceptor, responseInterceptor } from './interceptors/response';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor());

export default instance;
