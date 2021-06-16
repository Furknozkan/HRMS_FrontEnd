import React, { useState, useEffect } from 'react'
import {  Card } from 'semantic-ui-react'
import JobPostingService from "../services/JobPostingService"

export default function JobPostingList() {

    const [jobPostings, setjobPostings] = useState([]);

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(result => setjobPostings(result.data.data))

    }, [])


    return (
        <div>
            <Card.Group>
                {jobPostings.map((jobPosting)=>(
                    
                <Card fluid color="blue" key={jobPosting.id}>

                    <Card.Content >
                        <Card.Header textAlign="left">{jobPosting.jobName}</Card.Header>
                        <hr />
                        <Card.Header textAlign="left">{jobPosting.companyName}</Card.Header>
                        <Card.Description textAlign="left"  content= {jobPosting.city.cityName} /> 
                        <hr/>
                        <Card.Description textAlign="left" content={jobPosting.jobDescription} />
                        <Card.Description textAlign="left" content={"Maaş: " + jobPosting.minSalary + " - " + jobPosting.maxSalary} />
                        <Card.Description textAlign="right" content={jobPosting.releaseDate} />
                    </Card.Content>
                </Card>
                ))}
            </Card.Group>

        </div>







        
    )
}
