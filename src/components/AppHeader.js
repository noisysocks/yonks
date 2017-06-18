import React from 'react';
import styled from 'styled-components';
import { HEADER_BACKGROUND, HEADER_TEXT } from '../constants/colors';
import { APP_HEADER_HEIGHT } from '../constants/sizes';
import { MIDDLE } from '../constants/depths';

const Header = styled.header`
  align-items: center;
  background: ${HEADER_BACKGROUND};
  color: ${HEADER_TEXT};
  display: flex;
  height: ${APP_HEADER_HEIGHT};
  justify-content: space-between;
  left: 0;
  padding: 10px 10%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${MIDDLE};
`;

function AppHeader({ children }) {
  return (
    <Header>
      <h1>Yonks</h1>
      <div>
        {children}
      </div>
    </Header>
  );
}

export default AppHeader;
