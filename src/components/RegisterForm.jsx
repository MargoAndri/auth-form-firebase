import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Formik} from "formik";

class Form extends Component {
    render() {
        const { onSubmitNewUser } = this.props;
        return (
            <div>
                <h3>Registration Form</h3>
                <Formik
                initialValues={{
                    firstName: '',
                    secondName: '',
                    username: '',
                    email: '',
                    password: '',
                }}
                onSubmit={values => {
                    onSubmitNewUser(values)
                }}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                placeholder="Name"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="secondName"
                                value={values.secondName}
                                placeholder="Name"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="username"
                                value={values.username}
                                placeholder="Username"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <button type="Submit">Register</button>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Form;
