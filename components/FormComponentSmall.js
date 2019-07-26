import React from "react";
//import PropTypes from 'prop-types';
import { Formik, Field, Form } from "formik";

import FormSchemaSmall from "../services/FormSchemaSmall";


class FormComponentSmall extends React.PureComponent {

    render() {
        //const { handleChange, handleSubmit, values } = this.props;
        return (
            <div className="container">
                <h2>Small form</h2>
                <Formik

                    initialValues={
                        {
                            nameSmall: ""
                        }
                    }

                    validationSchema={FormSchemaSmall}
                    onSubmit={(values, actions) => {
                        /*setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                        }, 500);*/
                        alert(JSON.stringify(values, null, 2));
                        actions.resetForm(this.initialValues);
                        //actions.setFieldValue("nameSmall","test text", true);
                        //resetForm(this.initialValues);
                    }}

                    render={({errors, touched}) => (
                        <Form className="form-container">
                            <Field
                                name="nameSmall"
                                placeholder="enter name"
                                type="text"
                            />
                            {errors.nameSmall &&
                            touched.nameSmall && (
                                <div className="field-error">{errors.nameSmall}</div>
                            )}
                            <button type="button" onClick={null}>Set value</button>
                            <button type="button" onClick={null}>Reset form</button>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                />

            </div>
        )
    }

}

export default FormComponentSmall;