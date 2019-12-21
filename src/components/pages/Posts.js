import React from 'react';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from '../config/constants';

const PostsStyles = styled.div`
  padding: 4vh 13vw;

  background: linear-gradient(
    45deg,
    ${props => props.theme.color.purple.main} 50%,
    ${props => props.theme.color.electricPink}
  );

  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: 1 auto;
  }
  
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: repeat(2, 50%);

  h2 {
    text-align: center;
  }
`;

const Posts = () => {
  return (
    <PostsStyles>
      <h2>Posts</h2>
      <h2>Coming soon!</h2>
    </PostsStyles>
  );
};

export default Posts;
