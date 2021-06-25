import axios from 'axios'

export default class EmployerService {
    getEmployer() {
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    addEmployer(values) {
        return axios.post("http://localhost:8080/api/employers/add", values)
    }


}
