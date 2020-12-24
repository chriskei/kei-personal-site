import React from 'react';
import Link from 'next/link';
import styles from '../styles/navigation.module.scss';

const Navigation = (props) => {
  const { currentSection } = props;

  return (
    <nav className={styles.navBar}>
      <Link href="/#hello" passHref={true} replace={true}>
        <a
          style={{ color: currentSection == 0 ? 'orange' : 'white' }}
          className={styles.large}
        >
          CHRISTOPHER KEI
        </a>
      </Link>
      <Link href="/#about" passHref={true} replace={true}>
        <a
          style={{ color: currentSection == 1 ? 'orange' : 'white' }}
          className={styles.large}
        >
          ABOUT
        </a>
      </Link>
      <Link href="/#work" passHref={true} replace={true}>
        <a
          style={{ color: currentSection == 2 ? 'orange' : 'white' }}
          className={styles.large}
        >
          WORK
        </a>
      </Link>
      <Link href="/#contact" passHref={true} replace={true}>
        <a
          style={{ color: currentSection == 3 ? 'orange' : 'white' }}
          className={styles.large}
        >
          CONTACT
        </a>
      </Link>
    </nav>
  );
};

export { Navigation };
