import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from '../Headings';
import ErrorText from '../ErrorText';

const PostItem = (props) => {
  const { error, loading, post } = props;

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
    <div>
      <H1>
        {post.data.title}
      </H1>
      {post.data.body}
    </div>
  );
};

PostItem.defaultProps = {
  loading: false,
  error: null,
  post: {},
};

PostItem.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  post: PropTypes.object,
};

export default PostItem;
