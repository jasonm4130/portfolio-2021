import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import {
  aboutMe,
  aboutMeBg,
  aboutMeImgContainer,
  aboutMeContent,
  aboutMeElipse,
  aboutMeTitle,
  aboutMeLead,
  aboutMeImg,
  aboutMeContainer,
  aboutMeWave,
} from './about-me.module.scss';
import AboutMeBg from '../../assets/svgs/about-me-bg.svg';
import Elipse from '../../assets/svgs/about-me-elpise.svg';
import Wave from '../../assets/svgs/about-me-wave.svg';

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "jason-profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className={aboutMe}>
      <div className={aboutMeContainer}>
        <div className={aboutMeImgContainer}>
          <Img
            className={aboutMeImg}
            fluid={data.file.childImageSharp.fluid}
            alt="Image of Jason Matthew"
          />
          <Elipse className={aboutMeElipse} />
        </div>
        <div className={aboutMeContent}>
          <h2 className={aboutMeTitle}>About Me</h2>
          <div className={aboutMeLead}>A Full Stack Developer</div>
          <p>
            I have been designing and developing websites for the past 7 years.
            Starting as a freelancer working with start-ups and local
            businesses. I love coding and learning about the latest trends. With
            a particular focus on the current JavaScript ecosystem, and a
            traditional knowledge of PHP through WordPress and MVC frameworks
            like SilverStripe, Code Ignitor and Laravel.
          </p>
          <p>
            I think that code quality and maintainability are of the utmost
            importance and this is a main focus of mine throughout all of my
            projects.
          </p>
          <p>
            I am a avid learner and I put a high priority on this attending
            local meetups whenever possible, while also seeking learning through
            online courses and personal projects.
          </p>
          <p>
            When outside of work I enjoy Learning including running two servers
            at home to experience more server architecture, networks and
            deployment methods.
          </p>
          <p>
            I also strive to remain active as fitness is a passion of mine
            participating in weekly 5km parkrun events, while remaining active
            through gym and running throughout the week.
          </p>
        </div>
      </div>
      <AboutMeBg className={aboutMeBg} />
      <Wave className={aboutMeWave} />
    </section>
  );
};

export default AboutMe;
