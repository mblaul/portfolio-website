import React from 'react';
import _ from 'lodash';
import PostsComponent from './PostsComponent';

import { useStaticQuery, graphql } from 'gatsby';

function getPosts(edges = []) {
  const posts = edges.map((edge) => {
    const { node } = edge;
    const { id, publishedAt, title, _rawBody: bodySections } = node;

    let bodyText = [];

    bodySections.forEach((bodySection) => {
      _.get(bodySection, `children`).forEach((sectionChild) => {
        bodyText.push(sectionChild.text);
      });
    });

    return {
      id,
      publishedAt,
      title,
      bodyText,
    };
  });

  return posts;
}

const PostsContainer = (props) => {
  // Get all of the posts from Sanity via GraphQL
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allSanityPost {
        edges {
          node {
            id
            publishedAt
            title
            _rawBody
          }
        }
      }
    }
  `);

  // Alias the nodes of the data to 'posts'
  const { allSanityPost: { edges } } = data;
  const posts = getPosts(edges);

  return <PostsComponent posts={posts} />;
};

export default PostsContainer;
