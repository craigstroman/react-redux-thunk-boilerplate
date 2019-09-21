import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import UserItem from '../../components/UserItem/index';

const UserWrapper = styled.div`
  tex-align: left;
  width: 100%;
`;


class User extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const { id } = match.params;

    dispatch(fetchUser(id));
  }

  render() {
    const { error, loading, user } = this.props;

    return (
      <main>
        <UserWrapper>
          <UserItem
            loading={loading}
            error={error}
            user={user}
          />
        </UserWrapper>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  loading: state.userReducer.loading,
  error: state.userReducer.error,
});


User.defaultProps = {
  loading: false,
  error: null,
  user: {},
  dispatch: () => {},
  match: {},
};

User.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  user: PropTypes.object,
  dispatch: PropTypes.func,
  match: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(User));
