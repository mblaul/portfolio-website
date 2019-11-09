import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <PageHeader title="Projects" />
      <Page>Hello</Page>
    </Layout>
  );
};

export default ProjectsPage;
