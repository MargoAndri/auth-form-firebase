import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Formik} from "formik";
import * as Yup from 'yup';
import RegisterButton from "./common/Button.jsx";
import Input from "./common/Input.jsx";
import image from "../img/cosmos.png";
import Logo from "../img/svg_1.svg";

// Register Form styles
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

const Image = styled(Logo)`
     width: 175px;
     height: 60px;
     fill: #3d2875;
     margin-bottom: 70px;
`;


const Title = styled.h2`
    color: #503770;
    margin-bottom: 20px;
`;

const RegistrationForm = styled.form`
    display: flex;
    max-width: 700px;
    padding: 20px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`;

const NameWrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    width: 100%;
`;

const ErrorText = styled.p`
    font-size: 14px;
    background-color: rgb(255, 245, 245);
    color: rgb(120, 27, 0);
    padding: 5px;
    margin-top: 5px;
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
      background-position: center;
    }
    &.rotated {
        width: 100%;
        &:before {
          transition: transform .9s ease;
          transform: translateY(-25%) rotate(-90deg);
          height: 100vw;
          position: absolute;
          background-size: contain;
        }
    }
`;

// Register Form validation

const formSchema = Yup.object().shape({
    email: Yup.string()
        .email('The email is incorrect')
        .required('Please enter the email'),
    firstName: Yup.string().required('Please enter the name'),
    secondName: Yup.string().required('Please enter the last name'),
    username: Yup.string().required('Please enter the username'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Please enter the password'),
});


// Register Form component

class Form extends Component {
    static propTypes = {
        onRegisterUserRequest: PropTypes.func,
        isClose: PropTypes.bool,
    };

    render() {
        const { onRegisterUserRequest, isClose } = this.props;
        return (
            <Wrapper>
                <FormContainer className={`${isClose ? 'closed' : ''}`}>
                    <Formik enableReinitialize
                    initialValues={{
                        firstName: '',
                        secondName: '',
                        username: '',
                        email: '',
                        password: '',
                    }}
                    isInitialValid={true}
                    validationSchema={formSchema}
                    onSubmit={values => {
                        onRegisterUserRequest(values)
                    }}
                    >
                        {({ handleChange, handleSubmit, values, errors, touched }) => (
                            <RegistrationForm onSubmit={handleSubmit}>
                                <Image />
                                <Title>Registration Form</Title>
                                <NameWrapper>
                                    <div>
                                        <Input
                                            text="First Name"
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                            placeholder="Name"
                                            onChange={handleChange}
                                            className={`${touched.firstName && errors.firstName ? 'invalid' : ''}`}/>
                                        {errors.firstName && touched.firstName && <ErrorText>{errors.firstName}</ErrorText>}
                                    </div>
                                    <div>
                                        <Input
                                            special
                                            text="Second Name"
                                            type="text"
                                            name="secondName"
                                            value={values.secondName}
                                            placeholder="Name"
                                            onChange={handleChange}
                                            className={`${touched.secondName && errors.secondName ? 'invalid' : ''}`}/>
                                        {errors.secondName && touched.secondName && <ErrorText>{errors.secondName}</ErrorText>}
                                    </div>
                                </NameWrapper>
                                <Input
                                    text="Username"
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    placeholder="Username"
                                    onChange={handleChange}
                                    className={`${touched.username && errors.username ? 'invalid' : ''}`}
                                />
                                {errors.username && touched.username && <ErrorText>{errors.username}</ErrorText>}
                                <Input
                                    text="Email"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    placeholder="Email"
                                    onChange={handleChange}
                                    className={`${touched.email && errors.email ? 'invalid' : ''}`}
                                />
                                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                                <Input
                                    text="Password"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className={`${touched.password && errors.password ? 'invalid' : ''}`}
                                />
                                {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
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
