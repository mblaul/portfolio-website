import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formatDate } from '../utils/dateTimeHelper';

const PostStyles = styled.article`
  margin-bottom: 3em;

  section {
    padding: 0em 0em 0.8em 0.6em;
    border-left: 1px solid ${(props) => props.theme.color.pink.main};
    font-size: 1.3em;
  }
`;

const PostHeader = styled.div`
  margin-bottom: 1.5em;
  padding: 0.5em 2vw 0.25em 0em;
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.color.pink.main};
  max-width: max-content;
  font: 900 3.2em 'Muli', sans-serif;
  font-style: italic;
  margin: 0 0 0.3em 0;
  text-shadow: ${(props) => props.theme.color.accent} 0px 1px 0px;

  & .post-time {
    text-shadow: ${(props) => props.theme.color.accentSecondary} 0px 0px 1px;
    margin-top: 0.5em;
    font: 900 0.3em 'Muli', sans-serif;
  }
`;

const Post = ({ post }) => {
  return (
    <PostStyles id={post.id}>
      <PostHeader>
        <div>{post.title}</div>
        <div className="post-time">{formatDate(new Date(post.publishedAt))}</div>
      </PostHeader>
      {post.bodyText.map((text) => <section>{text}</section>)}
    </PostStyles>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
