import  axios from 'axios';
import React from 'react';

export const getCities = () => {
    return axios.get("http://localhost:8080/api/city/getall")
}