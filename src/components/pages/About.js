import React from 'react'

import PageHeader from '../PageHeader'
import Page from '../Page'

import SkillzGrid from '../SkillzGrid';

const About = () => {
  return (
    <>
      <PageHeader title="Hi, I'm Matt!" />
      <Page>
        <p>I'm a web developer from Dearborn, Michigan.</p>
        <p>
          I've always had a fun working on computers. That passion lead me to pursue a degree in Information Technology
          from Oakland University in Rochester Hills, Michigan.
          </p>
          <SkillzGrid />
      </Page>
    </>
  )
}

export default About
