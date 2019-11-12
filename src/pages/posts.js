import React from 'react';
import PostsContainer from '../components/posts/PostsContainer';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PostsPage = (props) => (
  <Layout pageProps={props}>
    <SEO title="Posts" />
    <PostsContainer />
  </Layout>
);

export default PostsPage;
