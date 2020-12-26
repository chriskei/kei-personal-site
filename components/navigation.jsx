import React from 'react';
import Link from 'next/link';

import styles from '../styles/navigation.module.scss';

const Navigation = (props) => {
  const { currentSection } = props;
  const linkColor = (index) => {
    return currentSection === index ? 'orange' : 'white';
  };

  return (
    <nav className={styles.navigationBar}>
      <Link href="/#hello" passHref replace>
        <a style={{ color: linkColor(0) }} className={styles.largeLink}>
          CHRISTOPHER KEI
        </a>
      </Link>
      <div>
        <Link href="/#about" passHref replace>
          <a style={{ color: linkColor(1) }} color={'black'} className={styles.smallLink}>
            ABOUT
          </a>
        </Link>
        <Link href="/#work" passHref replace>
          <a style={{ color: linkColor(2) }} className={styles.smallLink}>
            WORK
          </a>
        </Link>
        <Link href="/#contact" passHref replace>
          <a style={{ color: linkColor(3) }} className={styles.smallLink}>
            CONTACT
          </a>
        </Link>
      </div>
    </nav>
  );
};

export { Navigation };
