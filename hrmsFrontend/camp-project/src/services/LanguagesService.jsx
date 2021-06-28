import axios from 'axios'

export default class LanguagesService{
    getLanguages(){
        return axios.get("")
    }

    getByCandidateId(Candidate_id){
        return axios.get("http://localhost:8080/api/languagesService/getByCandidate_id?candidate=17", Candidate_id)
    }
}