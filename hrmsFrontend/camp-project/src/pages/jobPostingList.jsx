import React, { useState, useEffect } from 'react'
import { Card, Pagination, Button, Dropdown } from 'semantic-ui-react'
import JobPostingService from "../services/JobPostingService"
import { useDispatch } from 'react-redux';
import { addToFavourite } from "../Store/actions/favouriteActions"
import { toast } from "react-toastify";
import JobPostingFilter from "../layouts/Filter/JobPostingFilters"
import './JobPostingList.css';
export default function JobPostingList(){
    const dispatch = useDispatch()
    const [jobPostings, setjobPostings] = useState([]);
    const [filterOption, setFilterOption] = useState({});
    const [activePage, setActivePage] = useState(1);
    const [pageSize] = useState(2);
    const [totalPageSize, setTotalPageSize] = useState(0);
    

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getByEnableAndPageNumberAndFilter(activePage, pageSize, filterOption)
        .then((result) => {
        setjobPostings(result.data.data);
        setTotalPageSize(parseInt(result.data.message));
    })

    }, [filterOption, activePage, pageSize]);


    const handleFilterClick = (filterOption) => {
        if (filterOption.city_id === 0) {
            filterOption.city_id = null;
        }
        
        if (filterOption.workPlaceId === 0) {
            filterOption.workPlaceId = null;
        }
        if (filterOption.workTimeId === 0) {
            filterOption.workTimeId = null;
        }
        setFilterOption(filterOption);
        setActivePage(1);
    }

    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage);
    }

    const handleAddToFavourite=(jobPosting)=>{
        dispatch(addToFavourite(jobPosting));

        toast.success(`Başarıyla Kaydedildi!`)
    }

    return (
        <div>
            
            <JobPostingFilter clickEvent={handleFilterClick}/>

            

            <Card.Group>
                {jobPostings.map((jobPosting) => (

                    <Card fluid color="blue" className="card-container" key={jobPosting.id}>

                        <Card.Content >
                            <Card.Header textAlign="left">{jobPosting.jobName}</Card.Header>
                            <hr />
                            <Card.Header textAlign="left">{jobPosting.companyName}</Card.Header>
                            <Card.Description textAlign="left" content={jobPosting.city.cityName} />
                            <hr />
                            <Card.Description textAlign="left" content={jobPosting.jobDescription} />
                            <Card.Description textAlign="left" content={"Maaş: " + jobPosting.minSalary + " - " + jobPosting.maxSalary} />
                            <Card.Description textAlign="left" content={"Açık pozisyon: " + jobPosting.numberOfOpenPositions} />
                            <Card.Description textAlign="right" content={jobPosting.releaseDate} />
                            <Button onClick={()=>handleAddToFavourite(jobPosting)}>Kaydet</Button>
                        </Card.Content>
                      
                    </Card>
                    
                    
                ))}
            </Card.Group> 
           
          <div className="pagination">             
            <Pagination
                firstItem={null}
                lastItem={null}
                activePage={activePage}
                onPageChange={handlePaginationChange}
                totalPages={Math.ceil(totalPageSize / pageSize)}
            />
            </div> 

        </div>








    )
}

