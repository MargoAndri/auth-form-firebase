import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Formik} from "formik";
import RegisterButton from "./common/Button.jsx";
import Input from "./common/Input.jsx";
import image from "../img/cosmos.png";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  min-height: 100vh;
  display: flex;
  margin: 10px;
  @media (min-width: 1200px) {
    width: 100%;
  }
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
    width: 100%;
`;

const FormContainer = styled.div`
    position: relative;
    padding: 55px;
    width: 50%;
    float: left;
    margin: 10px;
    &.closed {
        display: none;
    }
`;

const Background = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  float: right;
  &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: url(${image}) no-repeat;
      background-size: cover;
      background-position: center;
  }
  
  &.rotated {
    width: 100%;
    &:before {
      transition: transform .9s ease;
      transform: translateY(-25%) rotate(-90deg);
      height: 100vw;
      width: 100%;
      position: absolute;
      background-size: auto;
    }
   }
`;

class Form extends Component {
    render() {
        const { onSubmitNewUser, isClose } = this.props;
        return (
            <Wrapper>
                <FormContainer className={`${isClose ? 'closed' : ''}`}>
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
                                <RegisterButton type="submit" buttonTitle="Register" />
                            </RegistrationForm>
                        )}
                    </Formik>
                </FormContainer>
                <Background className={`${isClose ? 'rotated' : ''}`} />
            </Wrapper>
        )
    }
}

export default Form;
