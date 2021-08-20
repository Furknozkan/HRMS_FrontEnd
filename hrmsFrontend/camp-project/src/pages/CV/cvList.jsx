import React, { useState, useEffect } from 'react'
import './cvList.css'
import CandidateUpdate from './CandidateUpdate'
import SchoolUpdate from './SchoolUpdate'
import LanguageUpdate from './LanguagesUpdate'
import ExperienceUpdate from './ExperiencesUpdate'
import { Icon, Button } from 'semantic-ui-react'
import { Modal, Tabs, Tab } from 'react-bootstrap'
import CandidateService from '../../services/CandidateService'
import SchoolService from '../../services/SchoolService'
import LanguagesService from '../../services/LanguagesService'
import ExperiencesService from '../../services/ExperiencesService'
import SkillService from '../../services/SkillsService'
export default function Cvdeneme() {
    const [candidates, setCandidates] = useState([]);
    const [schools, setSchools] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getByCandidateId().then(result => setCandidates(result.data.data))
    }, [candidates])

    useEffect(() => {
        let schoolService = new SchoolService()
        schoolService.getByCandidateId().then(result => setSchools(result.data.data))

    }, [schools])


    useEffect(() => {
        let languagesService = new LanguagesService()
        languagesService.getByCandidateId().then(result => setLanguages(result.data.data))
    }, [languages])

    useEffect(() => {
        let experiencesService = new ExperiencesService()
        experiencesService.getByCandidateId().then(result => setExperiences(result.data.data))
    }, [experiences])

    useEffect(() => {
        let skillService = new SkillService()
        skillService.getByCandidateId().then(result => setSkills(result.data.data))
    }, [skills])


    return (
        <div className="container">
            <div className="containerCv">

                <div className="left_side">

                    <div className="profileText">


                        <div className="imgBx">
                            <img src="https://s.gravatar.com/avatar/b3ec496f7ce6c295f512172ff1262f8f?d=mm" ></img>
                        </div>

                        {candidates.map((candidate) => (
                            <h2>{candidate.firstName + " " + candidate.lastName}<br /><span>Web Developer</span></h2>
                        ))}




                    </div>
                    <div className="contactInfo">

                        <h3 className="title">Contact Info</h3>
                        {candidates.map((candidate) => (
                            <ul>
                                <li>
                                    <span className="icon"><a><Icon name="phone" /></a></span>
                                    <span className="text">+1 000 000</span>
                                </li>
                                <li>
                                    <span className="icon"><a><Icon name="mail" /></a></span>
                                    <span className="text">{candidate.emailAddress}</span>
                                </li>
                                <li>
                                    <span className="icon"><a><Icon name="globe" /></a></span>
                                    <span className="text">www.furkan.com</span>
                                </li>
                                <li>
                                    <span className="icon"><a><Icon name="linkedin" /></a></span>
                                    <span className="text">{candidate.linkedin}</span>
                                </li>
                                <li>
                                    <span className="icon"><a><Icon name="github" /></a></span>
                                    <span className="text">{candidate.github}</span>
                                </li>
                            </ul>

                        ))}

                    </div>
                    <div className="contactInfo education">
                        <h3 className="title">Education</h3>
                        {schools.map((school) => (
                            <ul>
                                <li>
                                    <h5>{school.dateOfEntry}</h5>
                                    <h4>Master Degree in Computer Science</h4>
                                    <h4>{school.school_name}</h4>
                                </li>
                            </ul>
                        ))}

                    </div>
                    <div className="contactInfo language">
                        <h3 className="title">Languages</h3>
                        {languages.map((language) => (
                            <ul>
                                <li>
                                    <span className="text">{language.languages}</span>
                                    <span className="percent">

                                    </span>
                                </li>
                            </ul>
                        ))}

                    </div>

                </div>
                <div className="right_Side">
                    <div className="about">
                        <h2 className="title2">
                            Profile
                        </h2>
                        {candidates.map((candidate) => (
                            <p>{candidate.coverLetter}</p>
                        ))}

                    </div>
                    <div className="about">
                        <h2 className="title2">Experience</h2>
                        {experiences.map((experience) => (
                            <div className="box">
                                <div className="year_company">
                                    <h5>{experience.start_date}</h5>
                                    <h5>{experience.companyName}</h5>
                                </div>
                                <div className="text">
                                    <h4>{experience.title}</h4>
                                    <p>{experience.experiences}</p>
                                </div>
                            </div>
                        ))}


                    </div>

                    <div className="about skills">
                        <h2 className="title2">Professional Skills</h2>
                        {skills.map((skill) => (
                            <div className="box">
                                <h4>{skill.skill}</h4>
                                <div className="percent">
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
            <div className="Modal">
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header>
                        <Modal.Title>CV UPDATE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Candidate" title="Candidate">
                            <CandidateUpdate />
                        </Tab>
                        <Tab eventKey="Education" title="Education">
                            <SchoolUpdate />
                        </Tab>
                        <Tab eventKey="Language" title="Language">
                        <LanguageUpdate />
                         </Tab>    
                         <Tab eventKey="Experience" title="Experience">
                            <ExperienceUpdate />
                        </Tab>
                              
                    </Tabs></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    )
}




/*import React from 'react'
import './cvdeneem.css'
import {Icon} from 'semantic-ui-react'
export default function cvdeneme() {




return (
        <div className="containerCv">
            <div className="left_side">
                <div className="profileText">
                    <div className="imgBx">
                        <img src="https://s.gravatar.com/avatar/b3ec496f7ce6c295f512172ff1262f8f?d=mm" ></img>
                    </div>
                        <h2>Furkan Özkan <br/><span>Web Developer</span></h2>
                </div>
                <div className="contactInfo">
                   <h3 className="title">Contact Info</h3>
                    <ul>
                        <li>
                            <span className="icon"><a><Icon name="phone" /></a></span>
                            <span className="text">+1 000 000</span>
                        </li>
                        <li>
                            <span className="icon"><a><Icon name="mail" /></a></span>
                            <span className="text">f@gmail.com</span>
                        </li>
                        <li>
                            <span className="icon"><a><Icon name="globe" /></a></span>
                            <span className="text">www.furkan.com</span>
                        </li>
                        <li>
                            <span className="icon"><a><Icon name="linkedin" /></a></span>
                            <span className="text">linkedin/furkan</span>
                        </li>
                        <li>
                            <span className="icon"><a><Icon name="github" /></a></span>
                            <span className="text">github/furkan</span>
                        </li>
                    </ul>
                </div>
                <div className="contactInfo education">
                   <h3 className="title">Education</h3>
                    <ul>
                       <li>
                           <h5>2010 - 2013</h5>
                           <h4>Master Degree in Computer Science</h4>
                           <h4>University Name</h4>
                       </li>
                       <li>
                           <h5>2010 - 2013</h5>
                           <h4>Master Degree in Computer Science</h4>
                           <h4>University Name</h4>
                       </li>
                       <li>
                           <h5>2010 - 2013</h5>
                           <h4>Master Degree in Computer Science</h4>
                           <h4>University Name</h4>
                       </li>
                    </ul>
                </div>
                <div className="contactInfo language">
                   <h3 className="title">Languages</h3>
                    <ul>
                        <li>
                            <span className="text">English</span>
                            <span className="percent">

                            </span>
                        </li>
                        <li>
                            <span className="text">English</span>
                            <span className="percent"></span>
                        </li>
                        <li>
                            <span className="text">English</span>
                            <span className="percent"></span>
                        </li>
                    </ul>
                </div>

                 </div>
            <div className="right_Side">
                <div className="about">
                    <h2 className="title2">
                    Profile
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="about">
                    <h2 className="title2">Experience</h2>
                    <div className="box">
                        <div className="year_company">
                            <h5>2019 - Present</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>Senior UX Desiner</h4>
                            <p>Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="year_company">
                            <h5>2016 - Present</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>Senior UX Desiner</h4>
                            <p>Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2010 - Present</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>Senior UX Desiner</h4>
                            <p>Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                        </div>
                    </div>

                </div>

                <div className="about skills">
                    <h2 className="title2">Professional Skills</h2>
                    <div className="box">
                        <h4>Html</h4>
                        <div className="percent">
                        </div>
                    </div>
                    <div className="box">
                        <h4>Css</h4>
                        <span className="percent"></span>

                    </div>
                    <div className="box">
                        <h4>Js</h4>
                        <div className="percent">
                        </div>
                    </div>
                    <div className="box">
                        <h4>Java</h4>
                        <div className="percent">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}*/
