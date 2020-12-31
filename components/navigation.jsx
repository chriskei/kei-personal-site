import React from 'react';
import Link from 'next/link';

import styles from '../styles/navigation.module.scss';

const Navigation = (props) => {
  const { currentSection, color } = props;
  const linkColor = (index) => (currentSection === index ? color : 'white');

  return (
    <nav className={styles.navigationBar}>
      <Link href="/#hello" replace>
        <a style={{ color: linkColor(0) }} className={styles.largeLink}>
          CHRISTOPHER KEI
        </a>
      </Link>
      <div>
        <Link href="/#about" replace>
          <a
            style={{ color: linkColor(1) }}
            color="black"
            className={styles.smallLink}
          >
            ABOUT
          </a>
        </Link>
        <Link href="/#work" replace>
          <a style={{ color: linkColor(2) }} className={styles.smallLink}>
            WORK
          </a>
        </Link>
        <Link href="/#contact" replace>
          <a style={{ color: linkColor(3) }} className={styles.smallLink}>
            CONTACT
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
