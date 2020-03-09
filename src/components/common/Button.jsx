import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Button styles

const Button = styled.button`
  padding: 15px 50px;
  align-self: center;
  color: #fff;
  margin: 15px;
  background: #312965;
  background: linear-gradient(to bottom, #302f6c, #2c1f4f);
  border-radius: 25px;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
`;

// Button

function RegisterButton(props) {
    const {type, buttonTitle} = props;
    return (
        <Button type={type}>{buttonTitle}</Button>
    );
}

RegisterButton.propTypes = {
    type: PropTypes.string,
    buttonTitle: PropTypes.string,
};

export default RegisterButton;
