import axios from 'axios'

export default class CandidateCvService{
    getCandidateCv (){
        return axios.get("http://localhost:8080/api/candidateCvController/getall")
    }

    getByCandidateId(Candidate_id){
        return axios.get("http://localhost:8080/api/candidateCvController/getByCandidate_id?candidate=17", Candidate_id)
    }

    addCandidateCv(){
        return axios.post("")
    }

    updateCandidateCv(candidate, values){
        return axios.put("")
    }
}