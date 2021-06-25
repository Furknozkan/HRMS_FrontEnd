import React, { useState, useEffect } from 'react';
import { Formik } from "formik";

import { Grid, FormField } from 'semantic-ui-react';
import * as Yup from 'yup';
import './AddJobPosting.css';
import JobPostingService from '../services/JobPostingService';
import { getCities } from '../services/CityService';
import {getWorkTimes} from '../services/WorkTimeService'
import { Form,  SubmitButton,  Select } from 'formik-semantic-ui-react'
import { getWorkPlaces } from '../services/WorkPlacesService';


export default function AddJobPosting() {
    let jobPostingService = new JobPostingService();
    


    const [cities, setCities] = useState([]);

    const [workTimes, setWorkTimes] = useState([]);

    const [workPlaces, setWorkPlaces] = useState([]);

    useEffect(() => {
        getCities().then((sonuc) => setCities(sonuc.data.data));
    }, []);

    useEffect(() => {
        getWorkTimes().then((sonuc) => setWorkTimes(sonuc.data.data));
    }, []);

    useEffect(() => {
        getWorkPlaces().then((sonuc) => setWorkPlaces(sonuc.data.data));
    }, []);


    var cityOptions = cities.map(function (city) {
        return { key: city.city_id, text: city.cityName, value: city.city_id };

    });

    var workTimeOptions = workTimes.map(function (workTime) {
        return { key: workTime.workTimeId, text: workTime.workTimeName, value: workTime.workTimeId};
    })

    var workPlaceOptions = workPlaces.map(function (workPlace) {
        return { key: workPlace.workPlaceId, text: workPlace.workPlaceName, value: workPlace.workPlaceId};
    })
    console.log(cities)
    console.log(workTimes)
    let schema = Yup.object().shape({
        jobName: Yup.string().required("Doldurulması Zorunlu Alan"),
        jobDescription: Yup.string().required("Doldurulması Zorunlu Alan"),
        minSalary: Yup.number().required("Doldurulması Zorunlu Alan"),
        maxSalary: Yup.number().required("Doldurulması Zorunlu Alan"),
        numberOfOpenPositions: Yup.number().required("Doldurulması Zorunlu Alan"),
        applicationDeadline: Yup.date().required("Doldurulması Zorunlu Alan"),
        releaseDate: Yup.date().required("Doldurulamsı Zorunlu Alan"),
        companyName: Yup.string().required("Dolduruması Zorunlu Alan"),
        cityId: Yup.number().required("Doldurulması Zorunlu Alan"),
        workPlaceId: Yup.number().required("Doldurulması Zorunlu Alan").oneOf(['iş yerinde', 'uzaktan (remote) ']),
        workTimeId: Yup.number().required("Doldurulması Zorunlu Alan")

    });


    return (
        <div className="container-jobPosting">


            <div className="magic-form">

                <Formik
                    initialValues={{
                        jobName: '',
                        jobDescription: '',
                        minSalary: '',
                        maxSalary: '',
                        numberOfOpenPositions: '',
                        applicationDeadline: '',
                        releaseDate: '',
                        companyName: '',
                        cityId: '',
                        workPlaceId: '',
                        workTimeId: ''
                    }}

                    validationSchema={schema}
                    onSubmit={(values, { setSubmitting }) => {
                        jobPostingService.addJobPosting(values).then(response => console.log(response.data.message))

                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);

                    }}
                >
                    {({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleSubmit,
                        handleReset,
                        handleChange,
                        handleBlur
                    }) => (
                        <Form className="magic-form" onSubmit={handleSubmit}>
                            <h1>İş İlanı Ekle</h1>
                            <Grid>
                                <Grid.Column width={8} >

                                    <label htmlFor="jobName">Job Name</label>
                                    <input
                                        id="jobName"
                                        type="text"
                                        placeholder="..."
                                        className="input"
                                        value={values.jobName}
                                        onChange={handleChange}
                                    />
                                    {errors.name && touched.name && (
                                        <div className="input-feedback">{errors.name}</div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>


                                    <label htmlFor="jobDescription" className="topMargin">
                                        Job Description
                                    </label>
                                    <input
                                        id="jobDescription"
                                        type="text"
                                        placeholder="..."
                                        className="input"
                                        value={values.jobDescription}
                                        onChange={handleChange}
                                    />
                                </Grid.Column>
                            </Grid>
                            <Grid>
                                <Grid.Column width={8}>




                                    <label htmlFor="minSalary" className="topMargin">
                                        Minimum Maaş
                                    </label>
                                    <input
                                        id="minSalary"
                                        type="number"
                                        placeholder="0000"
                                        className="input"
                                        value={values.minSalary}
                                        onChange={handleChange}
                                    />
                                </Grid.Column>
                                <Grid.Column width={8}>



                                    <label htmlFor="maxSalary" className="topMargin">
                                        Maximum Maaş
                                    </label>
                                    <input
                                        id="maxSalary"
                                        type="number"
                                        placeholder="0000"
                                        className="input"
                                        value={values.maxSalary}
                                        onChange={handleChange}
                                    />
                                </Grid.Column>

                            </Grid>
                            <Grid>
                                <Grid.Column width={6}>


                                    <label htmlFor="numberOfOpenPositions" className="topMargin">
                                        Açık Pozisyon Sayısı
                                    </label>
                                    <input
                                        id="numberOfOpenPositions"
                                        type="number"
                                        placeholder="0"
                                        className="input"
                                        value={values.numberOfOpenPositions}
                                        onChange={handleChange}
                                    />
                                </Grid.Column>
                                <Grid.Column width={5}>



                                    <label htmlFor="applicationDeadline" className="topMargin">
                                        Son başvuru tarihi

                                    </label>
                                    <input
                                        id="applicationDeadline"
                                        type="date"
                                        placeholder="0000-00-00"
                                        className="input"
                                        value={values.applicationDeadline}
                                        onChange={handleChange}
                                    />
                                </Grid.Column>
                                <Grid.Column width={5}>



                                    <label htmlFor="releaseDate" className="topMargin">
                                        Yayın Tarihi
                                    </label>
                                    <input
                                        id="releaseDate"
                                        type="date"
                                        placeholder="0000-00-00"
                                        className="input"
                                        value={values.releaseDate}
                                        onChange={handleChange}
                                    />
                                </Grid.Column>
                            </Grid>
                            <Grid>
                                <Grid.Column width={8}>



                                    <label htmlFor="companyName" className="topMargin">
                                        Şirket İsmi
                                    </label>
                                    <input
                                        id="companyName"
                                        type="text"
                                        placeholder="..."
                                        className="input"
                                        value={values.companyName}
                                        onChange={handleChange}
                                    />
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <FormField>
                                        <Select
                                            name="cityId"
                                            id={cityOptions.text}
                                            onChange={handleChange}
                                            options={cityOptions}
                                            className="Select"
                                            label="City"
                                            value={values.cityId || ""}
                                            // onBlur={handleBlur}
                                            touched={values.cityId}
                                            style={{ display: "block" }}
                                        >

                                        </Select>
                                    </FormField>


                                </Grid.Column>
                            </Grid>

                            <Grid>
                                <Grid.Column width={8}>
                                        <FormField>
                                            <Select
                                            name="workPlaceId"
                                            id={workPlaceOptions.text}
                                            onChange={handleChange}
                                            options={workTimeOptions}
                                            className="Select"
                                            label="workPlace"
                                            value={values.workTimeId || ""}
                                            touched={values.workTimeId}
                                            style={{display: "block"}}
                                            ></Select>
                                        </FormField>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                        <FormField>
                                            <Select
                                            name="workTimeId"
                                            id={workTimeOptions.text}
                                            onChange={handleChange}
                                            options={workTimeOptions}
                                            className="Select"
                                            label="WorkTime"
                                            value={values.workTimeId || ""}
                                            touched={values.workTimeId}
                                            style={{ display: "block" }}
                                            >

                                            </Select>
                                        </FormField>
                                </Grid.Column>
                            </Grid>
                            <div className="checkbox topMargin">
                                <input
                                    id="agree"
                                    type="checkbox"
                                    value={values.agree}
                                    onChange={handleChange}
                                />
                                <label htmlFor="agree" className="checkbox-label">
                                    Sözleşmeyi okudum kabul ediyorum.
                                </label>
                            </div>
                            {errors.agree && (
                                <div className="input-feedback">{errors.agree}</div>
                            )}

                            <FormField
                                id="form-button-control-public"
                                control={SubmitButton}
                                content="Confirm"
                                type="submit"

                            />


                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )

}