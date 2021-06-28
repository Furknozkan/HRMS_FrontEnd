import axios from 'axios'

export default class DepartmentService{
    getDepartment(){
        return axios.get("")
    }

    getByCandidateId(){
        return axios.get("http://localhost:8080/api/departmentController/getByCandidate_id?candidate=17")
    }
}