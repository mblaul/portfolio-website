import React from 'react';
import PostsContainer from '../components/posts/PostsContainer';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (props) => (
  <Layout pageProps={props}>
    <SEO title="Home" />
    <PostsContainer />
  </Layout>
);

export default IndexPage;
