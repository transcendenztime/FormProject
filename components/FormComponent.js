//import React from 'react';
//import PropTypes from 'prop-types';

import './FormComponent.css';

import React from "react";
import { Formik, Field, Form } from "formik";

import FormSchema from "../services/FormSchema";

class FormComponent extends React.PureComponent {

    static propTypes = {
        //name: PropTypes.string.isRequired,
    };

    render() {

        return (
            <div className="container">
                <h1>Sign up</h1>
                <Formik
                    initialValues={{
                        email: "",
                        username: "",
                        password: ""
                    }}
                    validationSchema={FormSchema}
                    onSubmit={values => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                        }, 500);
                    }}
                    render={({ errors, touched }) => (
                        <Form className="form-container">
                            <label htmlFor="email">Email</label>
                            <Field
                                name="email"
                                placeholder="enter email"
                                type="email"
                            />

                            {errors.email &&
                            touched.email && <div className="field-error">{errors.email}</div>}

                            <label htmlFor="username">Username</label>
                            <Field name="username" placeholder="enter name" type="text" />

                            {errors.username &&
                            touched.username && (
                                <div className="field-error">{errors.username}</div>
                            )}

                            <label htmlFor="password">Password</label>
                            <Field name="password" placeholder="enter pass" type="password" />

                            {errors.password &&
                            touched.password && (
                                <div className="field-error">{errors.password}</div>
                            )}

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                />
            </div>
        )
        ;

    }

}

export default FormComponent;
