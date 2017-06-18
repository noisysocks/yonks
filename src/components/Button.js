import styled from 'styled-components';
import { BUTTON_BACKGROUND, BUTTON_TEXT } from './colors';

export default styled.button`
  background: ${BUTTON_BACKGROUND};
  border: none;
  color: ${BUTTON_TEXT};
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  padding: 0.5rem 1rem;
`;
