import  axios from 'axios';

export const getCities = () => {
    return axios.get("http://localhost:8080/api/city/getall")
}