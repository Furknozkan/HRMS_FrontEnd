import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Card,Image } from "semantic-ui-react"
import { useSelector } from 'react-redux'


export default function Favourites() {
    const {favouriteItems} = useSelector(state => state.favourite)
    
    return (
        <div>
            {
                 <Card.Group>
                 {favouriteItems.map((favouriteItem) => (
 
                     <Card fluid color="blue" className="card-container" key={favouriteItem.jobPosting.id}>
 
                         <Card.Content >
                         <Image
           floated='left'
           size='mini'
           src={favouriteItem.jobPosting.avatarUrl}
         />              
                             
                             <Card.Header textAlign="left">{favouriteItem.jobPosting.jobName}</Card.Header>
                             
                             <Card.Header textAlign="left">{favouriteItem.jobPosting.companyName}</Card.Header>
 
                             <div className="city">
                                     <Card.Description textAlign="left" content={favouriteItem.jobPosting.city.cityName} />
 
                             </div>
                           
                             
                                     
                                     <div className="relaseDate">
                                     <Card.Description textAlign="right" content={favouriteItem.jobPosting.releaseDate} />
                                     </div>
                                    
                           
                         </Card.Content>
                       
                     </Card>
                     
                     
                 ))}
             </Card.Group> 
            }
        </div>
       
    )
}
 