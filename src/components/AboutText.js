import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1.2rem;
`;

function AboutText() {
  return (
    <Container>
      <h2>About Yonks</h2>
      <p>Yonks is an app!</p>
      <p>
        Made lovingly by <a href="http://noisysocks.com">Robert Anderson</a>.
      </p>
    </Container>
  );
}

export default AboutText;
