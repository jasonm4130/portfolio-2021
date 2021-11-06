import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { hero, heroBg, heroContainer, heroProfile } from './hero.module.scss';
import HeroBg from '../../assets/svgs/hero-bg.svg';
import HeroProfile from '../../assets/svgs/hero-profile.svg';

const Hero = () => (
  <section className={hero}>
    <div className={heroContainer}>
      <div className="heroContent">
        <div className="heroSmall">Hello! I'm</div>
        <div className="heroLarge">Jason Matthew</div>
      </div>
      <HeroProfile className={heroProfile} />
    </div>
    <HeroBg className={heroBg} />
  </section>
);

export default Hero;
