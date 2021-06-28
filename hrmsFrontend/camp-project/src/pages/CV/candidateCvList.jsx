import React, { useState, useEffect } from 'react'
import CandidateCvService from '../../services/CandidateCVService'
import { Button, Card, Image } from 'semantic-ui-react'
import LanguagesService from '../../services/LanguagesService';
import ExperiencesService from '../../services/ExperiencesService';
import SchoolService from '../../services/SchoolService';
import DepartmentService from '../../services/DepartmentService';
import { NavLink } from 'react-router-dom';
import CandidateService from '../../services/CandidateService';

export default function CandidateCv() {
  const [candidates, setCandidates] = useState([]);
  const [candidateCvs, setCandidateCvs] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [schools, setSchools] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService()
    candidateService.getByCandidateId().then(result => setCandidates(result.data.data))
  }, [candidates])
  useEffect(() => {
    let candidateCvService = new CandidateCvService()
    candidateCvService.getByCandidateId().then(result => setCandidateCvs(result.data.data))

  }, [candidateCvs])


  useEffect(() => {
    let languagesService = new LanguagesService()
    languagesService.getByCandidateId().then(result => setLanguages(result.data.data))
  }, [languages])

  useEffect(() => {
    let experiencesService = new ExperiencesService()
    experiencesService.getByCandidateId().then(result => setExperiences(result.data.data))
  }, [experiences])

  useEffect(() => {
    let schollService = new SchoolService()
    schollService.getByCandidateId().then(result => setSchools(result.data.data))
  }, [schools])

  useEffect(() => {
    let departmentService = new DepartmentService()
    departmentService.getByCandidateId().then(result => setDepartments(result.data.data))
  }, [departments])

  return (
    <div>
      <Card.Group>
        {candidates.map((candidate) => (
      <Card fluid>
        <h2>Self İnformation</h2>
        
          <Card.Content>
             <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              />
              <Card.Header>{candidate.firstName + " " + candidate.lastName}</Card.Header>
              <Card.Meta>{"over letter: " + candidate.overLetter}</Card.Meta>
              <Card.Description>{"email:   " + candidate.emailAddress}</Card.Description>
              <Card.Description>{"birth date:   " + candidate.birthDate}</Card.Description>
              <Card.Description>{"programming languages:   " + candidate.programingLanguages}</Card.Description>
              <Card.Description>{"github:   " + candidate.github}</Card.Description>
              <Card.Description>{"linkedin:   " + candidate.linkedin}</Card.Description>


        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' as={NavLink} to="/CandidateUpdate">
            Update
          </Button>
        </div>
      </Card.Content>
        
        
        

      </Card>
      ))}
      </Card.Group>
       <Card.Group>
        {candidateCvs.map((candidateCv) => (
          <Card fluid>
            <Card.Content>
             
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green' as={NavLink} to="/CandidateUpdate">
                  Update
                </Button>
              </div>
            </Card.Content>
          </Card>






        ))}

      </Card.Group>

       
         
      <Card fluid>
        <h1>Languages</h1>
        {languages.map((language) => (
         
        <Card.Content>

        <Card.Description textAlign="left">{"language:  " + language.languages  }</Card.Description>
        <Card.Description textAlign="right">{"level:  "+language.level}</Card.Description>
  
        </Card.Content>
        ))}
        <Button basic color='green' as={NavLink} to="/LanguagesUpdate">
                  Update
                </Button>
        </Card>
        
      
    

      <Card fluid>
        <h1>Experiences</h1>
        {experiences.map((experience) => (
          <Card.Content>
            <Card.Header>{experience.experiences}</Card.Header>
            <Card.Description>{experience.start_date + "-" + experience.end_date}</Card.Description>
          </Card.Content>

        ))}
         <Button basic color='green' as={NavLink} to="/ExperiencesUpdate">
                  Update
                </Button>
      </Card>

      <Card fluid>
        <h2>Schools</h2>
        {schools.map((school) => (
          
          <Card.Content>
            <Card.Header>{school.school_name}</Card.Header>

          </Card.Content>
        ))}
         <Button basic color='green' as={NavLink} to="/SchoolUpdate">
                  Update
                </Button>
      </Card>

      <Card fluid>
        <h2>Departments</h2>
        {departments.map((department) => (
          <Card.Content>
            <Card.Header>{department.departmentName}</Card.Header>
          </Card.Content>
        ))}
         <Button basic color='green' as={NavLink} to="/DepartmentsUpdate">
                  Update
                </Button>
      </Card>
          
      
    </div>




  )


}