import React from 'react';
import styled from 'styled-components';
import { HEADER_TEXT } from './colors';

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

export default AppHeaderButton;
