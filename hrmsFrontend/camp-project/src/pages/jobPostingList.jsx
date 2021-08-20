import React, { useState, useEffect } from 'react'
import { Card, Pagination, Button, Grid, Image, GridRow, GridColumn } from 'semantic-ui-react'
import JobPostingService from "../services/JobPostingService"
import { useDispatch } from 'react-redux';
import { addToFavourite } from "../Store/actions/favouriteActions"
import { toast } from "react-toastify";
import JobPostingFilter from "../layouts/Filter/JobPostingFilters"
import './JobPostingList.css';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
 
export default function JobPostingList(){
    const dispatch = useDispatch()
    const [jobPostings, setjobPostings] = useState([]);
    const [filterOption, setFilterOption] = useState({});
    const [activePage, setActivePage] = useState(1);
    const [pageSize] = useState(2);
    const [totalPageSize, setTotalPageSize] = useState(0);
    const text = () => (
        <div className="favoriteLink">
            <Link to="/favourite">Kaydedilenleri Gör</Link>
        </div>
    )

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

        toast.success(text)
    }

    return (
        <div>
            
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                         <div className="filter">
            <JobPostingFilter clickEvent={handleFilterClick}/>
            </div>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Card.Group>
                {jobPostings.map((jobPosting) => (

                    <Card fluid color="blue" className="card-container" key={jobPosting.id}>

                        <Card.Content >
                        <Image
          floated='left'
          size='mini'
          src={jobPosting.avatarUrl}
        />              
                            
                            <Card.Header textAlign="left">{jobPosting.jobName}</Card.Header>
                            
                            <Card.Header textAlign="left">{jobPosting.companyName}</Card.Header>

                            <div className="city">
                                    <Card.Description textAlign="left" content={jobPosting.city.cityName} />

                            </div>
                          
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <div className="save">
                                         <Button onClick={()=>handleAddToFavourite(jobPosting)}>Kaydet</Button>
                                         </div>
                                    </Grid.Column>
                                    <Grid.Column width={12}>
                                    <div className="relaseDate">
                                    <Card.Description textAlign="right" content={jobPosting.releaseDate} />
                                    </div>
                                    </Grid.Column>
                                        
                                  
                                </Grid.Row>
                            </Grid>
                          
                        </Card.Content>
                      
                    </Card>
                    
                    
                ))}
            </Card.Group> 
                    </Grid.Column>
                </Grid.Row>

            </Grid>
           
            

            
           
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

