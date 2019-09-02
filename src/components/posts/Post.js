import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formatDate } from '../utils/dateTimeHelper';

const PostStyles = styled.article`
  margin-bottom: 3em;

  section {
    padding-left: 0.6em;
    border-left: 1px solid ${(props) => props.theme.color.electricPink};
    font-size: 1.2em;
  }
`;

const PostHeader = styled.div`
  margin-bottom: 1.5em;
  padding: 0.5em 10em 0.5em 1em;
  background-color: ${(props) => props.theme.color.main};
  /* background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.color.main} 60%,
    ${(props) => props.theme.color.electricPink}
  ); */
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.color.electricPink};
  max-width: max-content;

  h1 {
    font-size: 2.4em;
    margin: 0 0 0.2em 0;
    text-shadow: ${(props) => props.theme.color.accentSecondary} 0px 1px 0px,
      ${(props) => props.theme.color.accentSecondary} 1px 2px 0px,
      ${(props) => props.theme.color.accentSecondary} 2px 3px 0px,
      ${(props) => props.theme.color.accentSecondary} 3px 4px 0px;
  }
  .post-time {
    text-shadow: ${(props) => props.theme.color.accentSecondary} 0px 0px 1px;
    margin-top: 0.5em;
    font-size: 0.9em;
  }
`;

const Post = ({ post }) => {
  return (
    <PostStyles id={post.id}>
      <PostHeader>
        <h1>{post.title}</h1>
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
