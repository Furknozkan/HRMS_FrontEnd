import axios from 'axios'


export const getWorkPlaces = () => {
    return axios.get("http://localhost:8080/api/workPlaceContollers/getall")
}