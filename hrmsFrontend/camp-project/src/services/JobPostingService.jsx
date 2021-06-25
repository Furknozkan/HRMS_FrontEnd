import axios from 'axios'

export default class JobPostingService {
    getJobPostings() {
        return axios.get("http://localhost:8080/api/jobsposting/getall")
    }

    getByEnableTrue(){
        return axios.get("http://localhost:8080/api/jobsposting/getByEnable")
    }

  


    addJobPosting(values){
        return axios.post("http://localhost:8080/api/jobsposting/add",values)
    }
}
