import axios from 'axios'

export default class CandidateRegister{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidate/getall")
    }

    addCandidate() {
        return axios.post("http://localhost:8080/api/candidate/add")

    }


}