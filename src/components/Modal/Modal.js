import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.75);
  z-index: 4;
  transition: opacity 0.25s ease-in-out;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background: #fff;
`;

const Modal = () => (
  <Container>
    <Wrapper>
      <Box>
        <input type="text" />
      </Box>
    </Wrapper>
  </Container>
);

export default Modal;
