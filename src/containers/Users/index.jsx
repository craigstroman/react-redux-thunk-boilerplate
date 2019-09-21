import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from './actions';
import UserItems from '../../components/UserItems/index';

const UsersWrapper = styled.div`
  tex-align: left;
  width: 100%;
`;


class Users extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchUsers());
  }

  render() {
    const { error, loading, users } = this.props;

    return (
      <main>
        <UsersWrapper>
          <UserItems
            loading={loading}
            error={error}
            users={users}
          />
        </UsersWrapper>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  loading: state.usersReducer.loading,
  error: state.usersReducer.error,
});


Users.defaultProps = {
  loading: false,
  error: null,
  users: [],
  dispatch: () => {},
};

Users.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  users: PropTypes.array,
  dispatch: PropTypes.func,
};

export default withRouter(connect(mapStateToProps)(Users));
