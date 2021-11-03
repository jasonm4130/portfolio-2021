import React from 'react';
import 'normalize.css';
import './layout.scss';
import PropTypes from 'prop-types';
import Header from '../header/Header';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};
