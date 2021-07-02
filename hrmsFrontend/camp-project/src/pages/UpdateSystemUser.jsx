import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HrmsTextInput from '../../Utilities/customFormControls/HrmsTextInput'
import SystemUserService from '../services/SystemUserService'
export default function UpdateSystemUser() {
    let systemUserService = new SystemUserService();
    const initialValues = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
    }

    const schema = Yup.object({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        emailAddress: Yup.string().required,
        password: Yup.string().required()
    }),

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit = {(values,{ setSubmitting })=>{
            systemUserService.updateSystemUser(values).then(response => console.log(response.data.data))
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);

        }}
        >
            <Form className="ui form">
            <HrmsTextInput name="firstName" placeholder="first name"/>
            <HrmsTextInput name="lastName" placeholder="last name"/>
            <HrmsTextInput name="emailAddress" placeholder="email addres"/>
            <HrmsTextInput name="password" placeholder="password"/>
            <Button color="green" type="submit">Update</Button>

            </Form>
        </Formik>
        
    );
}
