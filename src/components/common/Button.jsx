import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  margin: 5px;
  padding: 15px 50px;
  color: #fff;
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

function RegisterButton(props) {
    const {onClick} = props;
    return (
        <Button onClick={onClick} type="button">Register</Button>
    );
}

RegisterButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
};

export default RegisterButton;
