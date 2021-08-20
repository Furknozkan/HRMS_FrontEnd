import axios from 'axios'

export default class SkillService {
    
    getByCandidateId(){
        return axios.get("http://localhost:8080/api/skillController/getByCandidate_id?candidate=17")
    }
    
}