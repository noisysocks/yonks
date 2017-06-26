import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DANGEROUS_BUTTON_TEXT } from '../constants/colors';

const LinkButton = styled.a`
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  padding: 0.5rem 1rem;

  ${props => props.dangerous && `
    color: ${DANGEROUS_BUTTON_TEXT};
  `}
`;

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  dangerous: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LinkButton;
