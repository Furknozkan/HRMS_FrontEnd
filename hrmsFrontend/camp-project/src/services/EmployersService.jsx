import axios from 'axios'

export default class EmployerService{
    getEmployers(){
        return axios.get("")
    }

    addEmployer(){
        return axios.post("")
    }

    getByEmpoyerId(){
        return axios.get("http://localhost:8080/api/jobsposting/getByEmployerId?employerId=7")
    }
}