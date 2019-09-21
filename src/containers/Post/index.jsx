import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from './actions';
import PostItem from '../../components/PostItem/index';

const PostWrapper = styled.div`
  tex-align: left;
  width: 100%;
`;


class Post extends React.Component {
  componentDidMount() {
    const { dispatch, match } = this.props;

    const { id } = match.params;

    dispatch(fetchPost(id));
  }

  render() {
    const { error, loading, post } = this.props;

    return (
      <main>
        <PostWrapper>
          <PostItem
            error={error}
            loading={loading}
            post={post}
          />
        </PostWrapper>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  post: state.postReducer.post,
  loading: state.postReducer.loading,
  error: state.postReducer.error,
});


Post.defaultProps = {
  loading: false,
  error: null,
  post: {},
  dispatch: () => {},
  match: {},
};

Post.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  post: PropTypes.object,
  dispatch: PropTypes.func,
  match: PropTypes.object,
};

export default withRouter(connect(mapStateToProps)(Post));
