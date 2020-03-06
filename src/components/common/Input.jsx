import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputWrapper = styled.div`
    margin: 15px;
    width: ${props => (props.special ? '235px' : '500px')};
`;

const FormInput = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  background-color: #fffff;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #73a7b6;
  outline: none;
  &::placeholder {
    opacity: 0.65;
  }
`;

const Label = styled.label`
  color: #928c88;
`;


function Input(props) {
    const {text, type, placeholder, name, value, onChange, special} = props;
    return (
        <InputWrapper special={special}>
            <Label>
                {text}
                <FormInput type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
            </Label>
        </InputWrapper>
    );
}

export default Input;
