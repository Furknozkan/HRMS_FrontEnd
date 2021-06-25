import axios from 'axios'


 export const getWorkTimes = () => {
        return axios.get("http://localhost:8080/api/workTimeController/getall")
    }
