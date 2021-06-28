import axios from 'axios'

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidate/getall")
    }

    addCandidate() {
        return axios.post("http://localhost:8080/api/candidate/add")

    }
    update(Candidate_id){
        return axios.put("http://localhost:8080/api/candidate/update?candidateId=17",Candidate_id)
    }

    getByCandidateId(Candidate_id){
        return axios.get("http://localhost:8080/api/candidate/getByCandidate_id?id=17", Candidate_id)
    }


}