import React from 'react';
import { Link } from 'gatsby';
import PostsContainer from '../components/posts/PostsContainer';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader title="Blog Posts" />
    <PostsContainer />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div />
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
