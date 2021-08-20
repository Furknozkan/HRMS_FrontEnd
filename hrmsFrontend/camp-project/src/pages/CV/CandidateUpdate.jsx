import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  Button  } from "semantic-ui-react";
import HrmsTextInput from '../../Utilities/customFormControls/HrmsTextInput'
import CandidateService from "../../services/CandidateService"

export default function CandidateUpdate() {
  const initialValues = { firstName: "", 
  lastName: "",
  emailAddress: "",
  birthDate:"",
  coverLetter:"",
  identificationNumber:"",
  linkedin:"",
  github:"",
  password:"",
  programingLanguages: ""}

  const schema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    emailAddress: Yup.string(),
    birthDate: Yup.date(),
    coverLetter: Yup.string(),
    identificationNumber: Yup.string(),
    linkedin: Yup.string(),
    github: Yup.string(),
    password: Yup.string(),
    programingLanguages: Yup.string()



  });

  return (
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit ={(values, { setSubmitting } ) => {
        CandidateService.update(values).then(response => console.log(response.data.message))
        
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
      }, 400);
     
      
         
      }}
      >
        <Form className="ui form">
          <HrmsTextInput name="firstName" placeholder="First Name"/>
          <HrmsTextInput name="lastName" placeholder="Last Name"/>
          <HrmsTextInput name="emailAddress" placeholder="Email"/>
          <HrmsTextInput name="birthDate" placeholder="Birth Date"/>
          <HrmsTextInput name="coverLetter" placeholder="Cover Letter"/>
          <HrmsTextInput name="identificationNumber" placeholder="Identification Number"/>
          <HrmsTextInput name="linkedin" placeholder="linkedin"/>
          <HrmsTextInput name="github" placeholder="github"/>
          <HrmsTextInput name="password" placeholder="password"/>
          <HrmsTextInput name="programingLanguages" placeholder="Programing Languages"/>
          <Button color="green" type="submit">Güncelle</Button>
        </Form>
      </Formik>
  );
  
}