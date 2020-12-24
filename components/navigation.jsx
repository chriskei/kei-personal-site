import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/navigation.module.scss';

const Navigation = () => {
  const [color, setColor] = useState('orange');

  return (
    <nav className={styles.navBar}>
      <Link href="/#home" passHref={true}>
        <a style={{ color: color }} className={styles.large}>
          CHRISTOPHER KEI
        </a>
      </Link>
      <Link href="/#about">ABOUT</Link>
      <Link href="/#work">WORK</Link>
      <Link href="/#contact">CONTACT</Link>
    </nav>
  );
};

export { Navigation };
