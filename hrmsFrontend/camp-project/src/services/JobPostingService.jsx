import axios from 'axios'
import React from 'react'

export default class JobPostingService {
    getJobPostings() {
        return axios.get("http://localhost:8080/api/jobsposting/getall")
    }


  


    addJobPosting(values){
        return axios.post("http://localhost:8080/api/jobsposting/add",values)
    }
}
