import React from "react";
import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import HrmsTextInput from '../../Utilities/customFormControls/HrmsTextInput'

export default function LanguagesUpdate() {
  const initialValues = { languages: "", level: "" };

  const schema = Yup.object({
    languages: Yup.string().required(),
    level: Yup.string().required(),
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
          <HrmsTextInput name="languages" placeholder="languages"/>
          <HrmsTextInput name="level" placeholder="level"/>
          <Button color="green" type="submit">Update</Button>
        </Form>
      </Formik>
  );
}