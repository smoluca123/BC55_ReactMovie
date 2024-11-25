import axios from 'axios';

const baseAPI = axios.create({
  baseURL: 'https://movienew.cybersoft.edu.vn/api/',
  params: {
    maNhom: 'GP03',
  },
  headers: {
    TokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIyMjIiLCJIZXRIYW5UaW1lIjoiMTcxNjUwODgwMDAwMCIsIm5iZiI6MTY4Nzg4NTIwMCwiZXhwIjoxNzE2NjU2NDAwfQ._zGig3qRiiBsp3ISyCdJnpwe6erHcB-KUpka3g0VMPE',
  },
});

baseAPI.interceptors.request.use(
  (request) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      request.headers.Authorization = `Bearer ${currentUser.accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('user');
      window.location.replace('/');
    }
    return Promise.reject(error);
  }
);

export default baseAPI;
