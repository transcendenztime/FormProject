import React from "react";
//import PropTypes from 'prop-types';
import { Formik, Field, Form } from "formik";

import FormSchemaSmall from "../services/FormSchemaSmall";


class FormComponentSmall extends React.PureComponent {
//class FormComponentSmall extends React.Component {

    state = {
        nameSmall: "",
        color: "",
        color2: "blue"
    };

    colorChanged = (EO) => {
        console.log("color = " + EO.target.value);
        /*this.setState({searchText: EO.target.value},function() {
            this.processList();
        });*/
        this.setState({color: EO.target.value});
    };

    /*colorChanged2 = (EO) => {
        console.log("color2 = " + EO.target.value);
        this.setState({color2: EO.target.value});
    };*/

    render() {
        //const { handleChange, handleSubmit, values } = this.props;
        return (
            <div className="container">
                <h2>Small form</h2>
                <Formik

                    initialValues={
                        {
                            nameSmall: "",
                            color: "",
                            color2: "blue"
                        }
                    }

                    /*initialValues={
                        {
                            nameSmall: this.state.nameSmall,
                            color: this.state.color,
                            color2: this.state.color2
                        }
                    }*/

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
                            <select
                                name="color"
                                value={this.state.color}
                                onChange={this.colorChanged}
                                style={{ display: 'block' }}
                            >
                                <option value="" label="Select a color" />
                                <option value="red" label="red" />
                                <option value="blue" label="blue" />
                                <option value="green" label="green" />
                            </select>
                            <Field
                                component="select"
                                name="color2"


                            >
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                            {errors.color &&
                            touched.color &&
                            <div className="field-error">
                                {errors.color}
                            </div>}
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
/*
<select
                                name="color"
                                value={this.state.color}
                                onChange={this.colorChanged}
                                style={{ display: 'block' }}
                            >
                                <option value="" label="Select a color" />
                                <option value="red" label="red" />
                                <option value="blue" label="blue" />
                                <option value="green" label="green" />
                            </select>
 */