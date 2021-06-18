import React, { useState, useEffect } from 'react';
import { Formik, setNestedObjectValues } from "formik";

import { Grid, FormField } from 'semantic-ui-react';
import * as Yup from 'yup';
import './AddJobPosting.css';
import JobPostingService from '../services/JobPostingService';
import {getCities} from '../services/CityService';
import { Form, Input, SubmitButton, ResetButton, TextArea, Select } from 'formik-semantic-ui-react'


export default function AddJobPosting() {
    let jobPostingService = new JobPostingService();

    const [cities, setCities] = useState([]);

    useEffect(() => {
        getCities().then((sonuc) => setCities(sonuc.data.data));
      }, []);
    

      var cityOptions = cities.map(function(city) {
        return { key: city.city_id, text: city.cityName, value: city.city_id };
        
      });
console.log(cities)
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
        workPlace: Yup.string().required("Doldurulması Zorunlu Alan").oneOf(['iş yerinde', 'uzaktan (remote) ']),
        workTime: Yup.string().required("Doldurulması Zorunlu Alan").oneOf(['Sürekli / Tam zamanlı', 'Dönemsel / Proje bazlı', 'Stajyer', 'Yarı zamanlı / Part Time', 'Serbest Zamanlı'])

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
                        workPlace: '',
                        workTime: ''
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



                                    <label htmlFor="workPlace" className="top-margin">
                                        Çalışma Yeri
                                    </label>
                                    <select
                                        id="workPlace"
                                        value={values.workPlace}
                                        onChange={handleChange}
                                    /*style={{
                                        marginTop: 10,
                                        width: '220px',
                                        padding: '12px 30px',
                                        outline: 'none',
                                    }}*/
                                    >

                                        <option value="" label="Çalışma Yerini seç.." />
                                        <option value="iş yerinde" label="iş yerinde" />
                                        <option value="uzaktan (remote)" label="uzaktan (remote)" />
                                    </select>

                                    {errors.workPlace && touched.workPlace && (
                                        <div className="input-feedback">{errors.workPlace}</div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>

                                    <label htmlFor="workTime" className="top-margin">
                                        Çalışma Zamanı
                                    </label>
                                    <select
                                        id="workTime"
                                        value={values.workTime}
                                        onChange={handleChange}
                                        style={{



                                        }}

                                    >
                                        <option value="" label="Çalışma Zamanı seç.." />
                                        <option value="Sürekli / Tam zamanlı" label="Sürekli / Tam zamanlı" />
                                        <option value="Dönemsel / Proje bazlı" label="Dönemsel / Proje bazlı" />
                                        <option value="Stajyer" label="Stajyer" />
                                        <option value="Yarı zamanlı / Part Time" label="Yarı zamanlı / Part Time" />
                                        <option value="Serbest Zamanlı" label="Serbest Zamanlı" />

                                    </select>
                                    {errors.workTime && touched.workTime && (
                                        <div className="input-feedback">{errors.workTime}</div>
                                    )}
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

