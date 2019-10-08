import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import About from '../components/About';

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <PageHeader title="About Me" />
    <About />
  </Layout>
);

export default AboutPage;
