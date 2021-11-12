import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import {
  hero,
  heroBg,
  heroElipse1,
  heroElipse2,
  heroContainer,
  heroProfile,
  heroContent,
  heroLead,
  heroSmall,
  heroH1,
  heroCta,
} from './hero.module.scss';
import HeroBg from '../../assets/svgs/hero-bg.svg';
import HeroProfile from '../../assets/svgs/hero-profile.svg';
import HeroElipse1 from '../../assets/svgs/hero-elipse-1.svg';
import HeroElipse2 from '../../assets/svgs/hero-elipse-2.svg';

const Hero = () => (
  <section className={hero}>
    <div className={heroContainer}>
      <div className={heroContent}>
        <h1 className={heroH1}>
          <span className={heroLead}>Hello! I'm</span>
          Jason Matthew
          <span className={heroSmall}>
            A full stack developer from <br />
            Brisbane Australia
          </span>
        </h1>
        <Link to="/contact" className={heroCta}>
          Get in touch!
        </Link>
      </div>
      <HeroProfile className={heroProfile} />
    </div>
    <HeroBg className={heroBg} />
    <HeroElipse1 className={heroElipse1} />
    <HeroElipse2 className={heroElipse2} />
  </section>
);

export default Hero;
