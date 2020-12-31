import React from 'react';

import styles from '../styles/footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      Designed, Developed, and Deployed by
      {' '}
      <a href="https://github.com/chriskei" target="_blank" rel="noreferrer">
        Christopher Kei
      </a>
      {' '}
      • 2020
    </p>
  </footer>
);

export default Footer;
