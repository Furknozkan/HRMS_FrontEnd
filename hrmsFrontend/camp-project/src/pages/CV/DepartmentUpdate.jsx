import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  Button } from "semantic-ui-react";
import HrmsTextInput from '../../Utilities/customFormControls/HrmsTextInput'

export default function DepartmentUpdate() {
  const initialValues = { departmentName: "" };

  const schema = Yup.object({
    departmentName: Yup.string().required()

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
          <HrmsTextInput name="departmentName" placeholder="Department Name"/>
          <Button color="green" type="submit">Update</Button>
        </Form>
      </Formik>
  );
}