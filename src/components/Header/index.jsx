import React from 'react';
import styled from 'styled-components';
import { H1 } from '../Headings/index';

const Container = styled.div`
  text-align: center;
  width: 100%;
`;


const Header = () => (
  <header>
    <Container>
      <H1>React Redux Thunk Boilerplate</H1>
      <hr />
    </Container>
  </header>
);

export default Header;
