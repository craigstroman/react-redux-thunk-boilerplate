
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ErrorText from '../ErrorText';
import Ul from '../Ul';

const PostsContainer = styled.div`
  tex-align: left;
  width: 100%;
`;

const PostItems = (props) => {
  const { loading, error, posts } = props;

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
    <PostsContainer>
      <Ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </Ul>
    </PostsContainer>
  );
};

PostItems.defaultProps = {
  loading: false,
  error: null,
  posts: [],
};

PostItems.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  posts: PropTypes.array,
};


export default PostItems;
