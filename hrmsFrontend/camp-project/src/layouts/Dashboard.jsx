import React from 'react'
import JobPostingList from '../pages/jobPostingList'
import Categories from './Categories'
import {Grid} from 'semantic-ui-react'
import { Route } from 'react-router'
import AddJobPosting from '../pages/AddJobPosting'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories /> 
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobPostingList}/>
                        <Route exact path="/jobPostings" component={JobPostingList}/>
                        <Route path="/AddJobPosting" component={AddJobPosting}/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
