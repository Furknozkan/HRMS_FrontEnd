import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import JobPostingService from "../services/JobPostingService"

export default function JobPostingList() {

    const [jobPostings, setjobPostings] = useState([]);

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(result=>setjobPostings(result.data.data))
       
    }, [])


    return (
        <div>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Min. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Number of Open Positions</Table.HeaderCell>
                        <Table.HeaderCell>Application Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPostings => (
                            <Table.Row>
                                <Table.Cell>{jobPostings.jobName}</Table.Cell>
                                <Table.Cell>{jobPostings.jobDescription}</Table.Cell>
                                <Table.Cell>{jobPostings.minSalary}</Table.Cell>
                                <Table.Cell>{jobPostings.maxSalary}</Table.Cell>
                                <Table.Cell>{jobPostings.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{jobPostings.applicationDeadline}</Table.Cell>
                                <Table.Cell>{jobPostings.releaseDate}</Table.Cell>
                                <Table.Cell>{jobPostings.companyName}</Table.Cell>
                                <Table.Cell>{jobPostings.city.name}</Table.Cell>
             

                            </Table.Row>

                        ))
                    }





                </Table.Body>
            </Table>
        </div>
    )
}
