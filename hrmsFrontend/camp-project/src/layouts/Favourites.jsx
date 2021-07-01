import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react"
import { useSelector } from 'react-redux'
import JobPostingService from '../services/JobPostingService';

export default function Favourites() {
    const {favouriteItems} = useSelector(state => state.favourite)
    
    return (
        <div>
            <Dropdown item text="Favoriler">
                <Dropdown.Menu>
                    {
                        favouriteItems.map((favouriteItem)=>(
                            <Dropdown.Item  key={favouriteItem.id}>
                                {favouriteItem.jobPosting.jobName}
                                <Label>
                                    {favouriteItem.jobPosting.companyName}
                                </Label>
                            </Dropdown.Item>
                        ))

                    }
                     <Dropdown.Divider/>
                     <Dropdown.Item as={NavLink} to="/favourite">Favorilere git</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            
        </div>
    )
}
