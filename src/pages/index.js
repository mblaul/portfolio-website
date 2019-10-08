import React from 'react';
import PostsContainer from '../components/posts/PostsContainer';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader title="Blog Posts" />
    <PostsContainer />
  </Layout>
);

export default IndexPage;
