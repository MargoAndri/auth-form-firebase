import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Formik} from "formik";
import RegisterButton from "./common/Button.jsx";
import Input from "./common/Input.jsx";

const FormContainer = styled.div`
    margin: 20px;
`;

const Title = styled.h2`
    color: #503770;
    margin-bottom: 20px;
`;

const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;

const NameWrapper = styled.div`
    display: flex;
    justify-content: space-between; 
`;

class Form extends Component {
    render() {
        const { onSubmitNewUser } = this.props;
        return (
            <FormContainer>
                <Title>Registration Form</Title>
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
                        <RegistrationForm onSubmit={handleSubmit}>
                            <NameWrapper>
                                <Input
                                    special
                                    text="First Name"
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    placeholder="Name"
                                    onChange={handleChange}
                                />
                                <Input
                                    special
                                    text="Second Name"
                                    type="text"
                                    name="secondName"
                                    value={values.secondName}
                                    placeholder="Name"
                                    onChange={handleChange}
                                />
                            </NameWrapper>
                            <Input
                                text="Username"
                                type="text"
                                name="username"
                                value={values.username}
                                placeholder="Username"
                                onChange={handleChange}
                            />
                            <Input
                                text="Email"
                                type="email"
                                name="email"
                                value={values.email}
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <Input
                                text="Password"
                                type="password"
                                name="password"
                                value={values.password}
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <RegisterButton type="Submit" buttonTitle="Register"/>
                        </RegistrationForm>
                    )}
                </Formik>
            </FormContainer>
        )
    }
}

export default Form;
