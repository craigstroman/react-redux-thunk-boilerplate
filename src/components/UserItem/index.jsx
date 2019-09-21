import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorText from '../ErrorText';

const UserContainer = styled.div`
  tex-align: left;
  width: 100%;
  div {
    span {
      font-weight: bold;
      margin-right: 5px;
    }
  }
`;

const UserItem = (props) => {
  const { loading, error, user } = props;

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
    <UserContainer>
      <div>
        <span>
          Name:&nbsp;
        </span>
        {user.name}
      </div>
      <div>
        <span>
          Email:&nbsp;
        </span>
        {user.email}
      </div>
      <div>
        <span>
          Username:&nbsp;
        </span>
        {user.username}
      </div>
    </UserContainer>
  );
};

UserItem.defaultProps = {
  loading: false,
  error: null,
  user: {},
};

UserItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  user: PropTypes.object,
};


export default UserItem;
