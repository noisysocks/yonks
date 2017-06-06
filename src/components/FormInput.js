import React from 'react';
import styled from 'styled-components';
import { FORM_BORDER } from './colors';

const Input = styled.input`
  border: 1px solid ${FORM_BORDER};
  padding: 0.5rem;
  width: 100%;
`;

function FormInput({ label, placeholder }) {
  return (
    <label>
      <b>{label}</b>
      <Input type="text" placeholder={placeholder} />
    </label>
  );
}

export default FormInput;
