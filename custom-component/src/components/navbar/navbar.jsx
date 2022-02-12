import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = (props) => {
  let activeStyle = { background: 'gray' };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlink}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className={styles.list}>Toggle</li>
        </NavLink>
        <NavLink
          to="/modal"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className={styles.list}>Modal</li>
        </NavLink>
        <NavLink
          to="/tab"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className={styles.list}>Tab</li>
        </NavLink>
        <NavLink
          to="/tag"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className={styles.list}>Tag</li>
        </NavLink>
        <NavLink
          to="/auto_complete"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className={styles.list}>Auto Complete</li>
        </NavLink>
        <NavLink
          to="/click_to_edit"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className={styles.list}>Click to Edit</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
