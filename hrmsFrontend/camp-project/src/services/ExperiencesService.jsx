import axios from 'axios'

export default class ExperiencesService{
    getExperiences(){
        return axios.get("")
    }

    getByCandidateId(Candidate_id){
        return axios.get("http://localhost:8080/api/experiences/getByCandidate_id?candidate=17", Candidate_id)
    }

}