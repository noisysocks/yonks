import React from 'react';
import styled from 'styled-components';
import { HEADER_BACKGROUND, HEADER_TEXT } from './colors';
import { APP_HEADER_HEIGHT } from './sizes';
import { MIDDLE } from './depths';

const Header = styled.header`
  align-items: center;
  background: ${HEADER_BACKGROUND};
  color: ${HEADER_TEXT};
  display: flex;
  height: ${APP_HEADER_HEIGHT};
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${MIDDLE};
`;

function AppHeader() {
  return (
    <Header>
      <h1>Yonks</h1>
    </Header>
  );
}

export default AppHeader;
