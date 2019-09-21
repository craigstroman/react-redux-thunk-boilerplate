
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ErrorText from '../ErrorText';
import Ul from '../Ul';

const UsersContainer = styled.div`
  tex-align: left;
  width: 100%;
`;

const UserItems = (props) => {
  const { loading, error, users } = props;

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorText>
          There was an error:
          {error}
          .
        </ErrorText>
      </div>
    );
  }

  return (
    <UsersContainer>
      <Ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.name}
              &nbsp;-&nbsp;
              {user.username}
            </Link>
          </li>
        ))}
      </Ul>
    </UsersContainer>
  );
};

UserItems.defaultProps = {
  loading: false,
  error: null,
  users: [],
};

UserItems.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  users: PropTypes.array,
};


export default UserItems;
