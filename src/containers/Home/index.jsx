import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/Header/index';
import Dashboard from '../Dashboard/index';
import Posts from '../Posts/index';
import Post from '../Post/index';
import Users from '../Users/index';
import User from '../User/index';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
`;

const Home = () => (
  <Container>
    <Header />
    <HashRouter>
      <Route
        exact
        path="/"
        component={Dashboard}
      />
      <Route
        exact
        path="/posts"
        component={Posts}
      />
      <Route
        exact
        path="/post/:id"
        component={Post}
      />
      <Route
        exact
        path="/users"
        component={Users}
      />
      <Route
        exact
        path="/user/:id"
        component={User}
      />
    </HashRouter>
  </Container>
);

export default Home;
