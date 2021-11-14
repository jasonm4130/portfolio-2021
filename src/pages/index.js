import * as React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import Experience from '../components/experience/Experience';
import AboutMe from '../components/about-me/AboutMe';

// markup
const IndexPage = () => (
  <Layout>
    <Hero />
    <Experience />
    <AboutMe />
  </Layout>
);

export default IndexPage;
