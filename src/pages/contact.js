import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <PageHeader title="Contact Me" />
      <Page>Contact me</Page>
    </Layout>
  );
};

export default ContactPage;
