import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './Post';

const PostsComponentStyles = styled.div`max-width: 100%;`;
const PostsComponent = ({ posts }) => {
  return <PostsComponentStyles>{posts.map((post) => <Post key={post.id} post={post} />)}</PostsComponentStyles>;
};

PostsComponent.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default PostsComponent;
