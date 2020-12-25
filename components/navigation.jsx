import React from 'react';
import Link from 'next/link';

import styles from '../styles/navigation.module.scss';

const Navigation = (props) => {
  const { currentSection, setCurrentSection } = props;
  const linkColor = (index) => {
    return currentSection === index ? 'orange' : 'white';
  };

  return (
    <nav className={styles.navigationBar}>
      <Link href="/#hello" passHref replace>
        <a
          onClick={() => setCurrentSection(0)}
          style={{ color: linkColor(0) }}
          className={styles.largeLink}
        >
          CHRISTOPHER KEI
        </a>
      </Link>
      <div>
        <Link href="/#about" passHref replace>
          <a
            onClick={() => setCurrentSection(1)}
            style={{ color: linkColor(1) }}
            className={styles.smallLink}
          >
            ABOUT
          </a>
        </Link>
        <Link href="/#work" passHref replace>
          <a
            onClick={() => setCurrentSection(2)}
            style={{ color: linkColor(2) }}
            className={styles.smallLink}
          >
            WORK
          </a>
        </Link>
        <Link href="/#contact" passHref replace>
          <a
            onClick={() => setCurrentSection(3)}
            style={{ color: linkColor(3) }}
            className={styles.smallLink}
          >
            CONTACT
          </a>
        </Link>
      </div>
    </nav>
  );
};

export { Navigation };
