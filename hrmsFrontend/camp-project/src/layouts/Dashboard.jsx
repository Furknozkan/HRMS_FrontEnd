import React from 'react'
import JobPostingList from '../pages/jobPostingList'
import Categories from './Categories'
import {Grid} from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories /> 
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobPostingList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
