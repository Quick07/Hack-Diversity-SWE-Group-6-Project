import '../AdminPage/AdminPage.css';
import React, { useContext, useState, useCallback } from 'react';
import { MainContainer, Title } from './CreateExamCard';
import Button from '../Buttons/Button';
import axios from 'axios';
import TextInput from '../Form/TextInput.jsx';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const SignUp = () => {
  return (
    <MainContainer>
      <Title>Create An Exam</Title>
      <div>
        <Formik
          initialValues={{
            id: '',
            name: '',
            email: '',
            sex: '',
            dob: '',
            imageURL: '',
            keyFindings: '',
          }}
          validationSchema={yup.object().shape({
            id: yup
              .number()
              .required('Your Id Is Required!')
              .min(2, 'Your ID Needs To Be Valid'),
            name: yup
              .string()
              .required('Your  Name Is Required!')
              .min(2, 'Your Name Needs To Be Valid'),

            email: yup.string().email().required('Your Email Is Required!'),
            sex: yup
              .string()
              .required('Your Gender Is Required!')
              .min(4, 'Your Gender Needs To Be Valid'),
            dob: yup
              .string()
              .required('Your Date OF Birth Is Required!')
              .min(4, 'Your Date OF Birth Needs To Be Valid'),
            imageURL: yup.mixed().nullable().required('Required Field'),
            keyFindings: yup
              .string()
              .required('Your Key Findings Is Required!')
              .min(4, 'Your Key Finding Needs To Be Valid'),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              axios
                .post('/', values, actions) // no try/catch here
                .then(response => {
                  console.log(response);
                })
                .catch(error => {
                  console.log(error.response);
                });
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                values: {
                  // the type of `values` inferred to be Blog
                  name: '',
                  email: '',
                  sex: '',
                  dob: '',
                  imageURL: null,
                  keyFindings: '',
                },
                // you can also set the other form states here
              });
            }, 400);
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            dirty,
            handleSubmit,
            values,
            handleBlur,
            handleChange,
          }) => (
            <Form onSubmit={handleSubmit}>
              <TextInput
                id='id'
                name='id'
                type='text'
                placeholder='id'
                value={values.id}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.id && touched.id ? <div>{errors.id}</div> : null}
              <TextInput
                id='name'
                name='name'
                placeholder='name'
                type='text'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <TextInput
                id='sex'
                name='sex'
                placeholder='Gender'
                value={values.sex}
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
              />
              {errors.sex && touched.sex ? <div>{errors.sex}</div> : null}
              <TextInput
                id='dob'
                name='dob'
                type='text'
                placeholder='Date Of Birth'
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dob && touched.dob ? <div>{errors.dob}</div> : null}
              <TextInput
                id='imageURL'
                name='image'
                type='file'
                accept='image/*'
                placeholder='image'
                value={values.imageURL}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.imageURL && touched.imageURL ? (
                <div>{errors.imageURL}</div>
              ) : null}
              <TextInput
                id='keyFindings'
                name='keyFindings'
                type='text'
                placeholder='Key Findings'
                value={values.keyFindings}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.keyFindings && touched.keyFindings ? (
                <div>{errors.keyFindings}</div>
              ) : null}

              <Button type='submit' disabled={!dirty || isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </MainContainer>
  );
};

export default SignUp;
