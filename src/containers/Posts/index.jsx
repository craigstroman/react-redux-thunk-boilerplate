import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import PostItems from '../../components/PostItems/index';

const PostsWrapper = styled.div`
  tex-align: left;
  width: 100%;
`;


class Posts extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchPosts());
  }

  render() {
    const { error, loading, posts } = this.props;

    return (
      <main>
        <PostsWrapper>
          <PostItems
            loading={loading}
            error={error}
            posts={posts}
          />
        </PostsWrapper>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading,
  error: state.postsReducer.error,
});


Posts.defaultProps = {
  loading: false,
  error: null,
  posts: [],
  dispatch: () => {},
};

Posts.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  posts: PropTypes.array,
  dispatch: PropTypes.func,
};

export default withRouter(connect(mapStateToProps)(Posts));
