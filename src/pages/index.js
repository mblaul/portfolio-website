import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/PageHeader';
import Page from '../components/Page';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <PageHeader title="About Me" />
      <Page>
        <p>Hi, I'm Matt!</p>
        <p>I'm a web developer from Dearborn, Michigan.</p>
        <p>
          I've always had a fun working on computers. That passion lead me to pursue a degree in Information Technology
          from Oakland University in Rochester Hills, Michigan.
        </p>
        <p>
          I currently specialize in these languages:
          <ul>
            <li>Javascript (React, NodeJS, Vanilla ES6+)</li>
            <li>Ruby (on Rails)</li>
            <li>SQL</li>
          </ul>
          I'm not limited to these and an always looking to learn something new!
        </p>
      </Page>
    </Layout>
  );
};

export default IndexPage;
