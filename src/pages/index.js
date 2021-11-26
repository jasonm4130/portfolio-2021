import * as React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import Experience from '../components/experience/Experience';
import AboutMe from '../components/about-me/AboutMe';
import LatestProjects from '../components/latest-projects/LatestProjects';

// markup
const IndexPage = () => (
  <Layout>
    <Hero />
    <Experience />
    <AboutMe />
    <LatestProjects />
  </Layout>
);

export default IndexPage;
