import React from 'react'
import JobPostingList from '../pages/jobPostingList'
import Categories from './Categories'
import {Grid} from 'semantic-ui-react'
import { Route } from 'react-router'
import AddJobPosting from '../pages/AddJobPosting'
import CandidateRegister from '../pages/CandidateRegister'
import EmployerRegister from '../pages/EmployerRegister'
import CandidateCv from '../pages/CV/candidateCvList'
import CandidateUpdate from '../pages/CV/CandidateUpdate'
import LanguagesUpdate from '../pages/CV/LanguagesUpdate'
import SchoolUpdate from '../pages/CV/SchoolUpdate'
import DepartmentUpdate from '../pages/CV/DepartmentUpdate'
import ExperiencesUpdate from '../pages/CV/ExperiencesUpdate'
import { ToastContainer } from "react-toastify";


export default function Dashboard() {
    return (
        <div>
                  <ToastContainer position="bottom-right"/>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories /> 
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobPostingList}/>
                        <Route exact path="/jobPostings" component={JobPostingList}/>
                        <Route exact path="/AddJobPosting" component={AddJobPosting}/>
                        <Route exact path="/CandidateRegister" component={CandidateRegister}/>
                        <Route exact path="/EmployerRegister" component={EmployerRegister}/>
                        <Route exact path="/CandidateCv" component={CandidateCv}/>
                        <Route exact path="/CandidateUpdate" component={CandidateUpdate}/>
                        <Route exact path="/LanguagesUpdate" component={LanguagesUpdate}/>
                        <Route exact path="/SchoolUpdate" component={SchoolUpdate}/>
                        <Route exact path="/DepartmentUpdate" component={DepartmentUpdate}/>
                        <Route exact path="/ExperiencesUpdate" component={ExperiencesUpdate}/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
