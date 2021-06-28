import axios from 'axios'

export default class SchoolService {
    getSchool(){
        return axios.get("")
    }
    getByCandidateId(){
        return axios.get("http://localhost:8080/api/schoolController/getByCandidate_id?candidate=17")
    }
    
}