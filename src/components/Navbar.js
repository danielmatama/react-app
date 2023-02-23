/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = () => (
  // <nav className="navigation">
  <nav className={styles.navigation}>
    <h1>Math Magicians</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
