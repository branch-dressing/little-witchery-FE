import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from '../Styles/Header.css';

export const Header = () => {
  const history = useHistory();

  const handleClickHome = () => history.push('/');

  return (
    <section className={styles.header}>
      <h1 className={styles.title} onClick={handleClickHome}>Little Witchery</h1>
      <div className={styles.navigation}>
        <div className={styles.navLinks}>
          <NavLink to='/about' activeStyle={{ backgroundColor: 'black', color: 'white' }}>About</NavLink>
          <NavLink to='/spells' activeStyle={{ backgroundColor: 'black', color: 'white' }}>Book of Spells</NavLink>
          <NavLink to='/shop' activeStyle={{ backgroundColor: 'black', color: 'white' }}>Shop</NavLink>
        </div>
        <img onClick={handleClickHome} className={styles.logo} src={logo} />
        <div className={styles.navLinks}>
          <NavLink to='/blog' activeStyle={{ backgroundColor: 'black', color: 'white' }}>Blog</NavLink>
          <NavLink to='/videos' activeStyle={{ backgroundColor: 'black', color: 'white' }}>Videos</NavLink>
          <NavLink to='/contact' activeStyle={{ backgroundColor: 'black', color: 'white' }}>Contact</NavLink>
        </div>
      </div>
    </section>
  );
};