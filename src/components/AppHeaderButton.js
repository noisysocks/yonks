import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HEADER_TEXT } from '../constants/colors';

const Link = styled.a`
  color: ${HEADER_TEXT};
  font-size: 30px;
  margin-left: 20px;
`;

function AppHeaderButton({ href, onClick, icon }) {
  return (
    <Link href={href} onClick={onClick}><i className={`fa fa-${icon}`} /></Link>
  );
}

AppHeaderButton.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default AppHeaderButton;
