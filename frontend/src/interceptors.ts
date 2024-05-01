import axios from 'axios'

export const axiosApiInstance = axios.create();


axiosApiInstance.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        console.log(accessToken)

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosApiInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            localStorage.clear()
            window.location.href = '/login'
        }
        return Promise.reject(error);
    }
);
