import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  Button  } from "semantic-ui-react";
import HrmsTextInput from '../../Utilities/customFormControls/HrmsTextInput'

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
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    emailAddress: Yup.string().required(),
    birthDate: Yup.date().required(),
    coverLetter: Yup.string().required(),
    identificationNumber: Yup.string().required(),
    linkedin: Yup.string().required(),
    github: Yup.string().required(),
    password: Yup.string().required(),
    programingLanguages: Yup.string().required()



  });

  return (
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit = {(values)=>{
          console.log(values)
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