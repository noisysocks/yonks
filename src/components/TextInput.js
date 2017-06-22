import styled from 'styled-components';
import { FORM_BORDER } from '../constants/colors';

const TextInput = styled.input`
  border: 1px solid ${FORM_BORDER};
  padding: 0.5rem;
  width: 100%;
`;

export default TextInput;
