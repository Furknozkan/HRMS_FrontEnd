import React from "react";
import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import HrmsTextInput from '../../Utilities/customFormControls/HrmsTextInput'

export default function SchoolUpdate() {
  const initialValues = { school_name: "",
   dateOfEntry: "",
   dateOfGraduation:"",
   _graduate:"" };

  const schema = Yup.object({
    school_name: Yup.string().required(),
    dateOfEntry: Yup.date().required(),
    dateOfGraduation: Yup.string().required(),
    _graduate: Yup.boolean().required()
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
          <HrmsTextInput name="school_name" placeholder="School Name"/>
          <HrmsTextInput name="dateOfEntry" placeholder="Date Of Entry"/>
          <HrmsTextInput name="dateOfGraduation" placeholder="Date of Graduation"/>
          <HrmsTextInput name="_graduate" placeholder="True/False"/>
          <Button color="green" type="submit">Update</Button>
        </Form>
      </Formik>
  );
}