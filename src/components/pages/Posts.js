import React from 'react';
import styled from 'styled-components';

import { mediaQueryBreakpoints } from '../config/constants';

import SkillzGrid from '../SkillzGrid';

const PostsStyles = styled.div`
  background-color: ${props => props.theme.color.purple.muted};

  @media (max-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: 1 auto;
  }
  @media (min-width: ${mediaQueryBreakpoints.med.px}) {
    grid-template-columns: repeat(2, 50%);
    padding: 4vh 13vw;
  }
  h2 {
    text-align: center;
  }
`;

const Posts = () => {
  return (
    <PostsStyles>
      <h2>Posts</h2>
      <SkillzGrid />
    </PostsStyles>
  );
};

export default Posts;
