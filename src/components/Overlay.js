import React from 'react';
import styled from 'styled-components';
import { TOP } from './depths';

const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${TOP};
`;

const Sheet = styled.div`
  background: #FFFFFF;
  height: 80%;
  max-height: 500px;
  max-width: 500px;
  width: 80%;
`;

function Overlay({ onDismiss, children }) {
  return (
    <Container onClick={onDismiss}>
      <Sheet onClick={e => e.stopPropagation()}>
        {children}
      </Sheet>
    </Container>
  );
}

export default Overlay;
