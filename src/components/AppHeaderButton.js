import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { HEADER_TEXT } from '../constants/colors';

const Link = styled.a`
  color: ${HEADER_TEXT};
  font-size: 30px;
  margin-left: 20px;
`;

function AppHeaderButton({ href, icon, onClick }) {
  return (
    <Link href={href} onClick={onClick}><i className={`fa fa-${icon}`} /></Link>
  );
}

AppHeaderButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AppHeaderButton;
