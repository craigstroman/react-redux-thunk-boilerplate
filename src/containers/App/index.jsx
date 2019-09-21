import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import configureStore from '../../configureStore';

import Home from '../Home/index';

import GlobalStyle from '../../global-styles';

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 100%;
`;

const store = configureStore();

const App = () => (
  <Wrapper>
    <Provider store={store}>
      <Home />
    </Provider>
    <GlobalStyle />
  </Wrapper>
);

export default App;
