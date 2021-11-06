import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import {
  header,
  navList,
  navListItem,
  navListItemCta,
  navListOpen,
  headerContainerBgPrimary,
} from './header.module.scss';
import Logo from '../../assets/svgs/logo.svg';
import HamburgerMenuIcon from '../hamburgerMenuIcon/HamburgerMenuIcon';

const NavItem = ({ name, link, isCta = false }) => (
  <li className={`${navListItem} ${isCta ? navListItemCta : ''}`}>
    <Link to={link}>{name}</Link>
  </li>
);

const Header = () => {
  const navItems = [
    { link: '#', name: 'Home' },
    { link: '#', name: 'Experience' },
    { link: '#', name: 'About Me' },
    { link: '#', name: 'Projects' },
    { link: '#', name: 'Contact ', isCta: true },
  ];

  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={header}>
      <Logo />
      <HamburgerMenuIcon navOpen={navOpen} setNavOpen={setNavOpen} />
      <nav>
        <ul className={`${navList} ${navOpen ? navListOpen : ''}`}>
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              name={item.name}
              link={item.link}
              isCta={item.isCta}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

NavItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  isCta: PropTypes.bool,
};
