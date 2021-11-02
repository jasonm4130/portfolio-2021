import * as React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { header, navList, navListItem } from './header.module.scss';
import Logo from '../../assets/svgs/logo.svg';

const NavItem = ({ name, link }) => (
  <li className={navListItem}>
    <Link to={link}>{name}</Link>
  </li>
);

// markup
const Header = () => {
  const navItems = [
    { link: '#', name: 'Home' },
    { link: '#', name: 'Experience' },
    { link: '#', name: 'About Me' },
    { link: '#', name: 'Projects' },
    { link: '#', name: 'Contact' },
  ];
  return (
    <header className={header}>
      <div>
        <Logo />
      </div>
      <nav>
        <ul className={navList}>
          {navItems.map((item) => (
            <NavItem key={item.name} name={item.name} link={item.link} />
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
};
