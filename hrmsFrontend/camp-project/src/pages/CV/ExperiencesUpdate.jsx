import React from "react";
import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import HrmsTextInput from '../../Utilities/customFormControls/HrmsTextInput'

export default function ExperiencesUpdate() {
  const initialValues = { experiences: "", 
  start_date:"",
  end_date:"",
  _working_now:"" };

  const schema = Yup.object({
    experiences: Yup.string().required(),
    start_date: Yup.date().required(),
    end_date: Yup.date().required(),
    _working_now: Yup.boolean().required()
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
          <HrmsTextInput name="experiences" placeholder="experiences"/>
          <HrmsTextInput name="start_date" placeholder="start date"/>
          <HrmsTextInput name="end_date" placeholder="end date"/>
          <HrmsTextInput name="_working_now" placeholder="working now"/>
          <Button color="green" type="submit">Update</Button>
        </Form>
      </Formik>
  );
}