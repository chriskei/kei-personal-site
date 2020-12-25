import React from 'react';
import Link from 'next/link';

import { NavigationLink } from './navigation-link';
import styles from '../styles/navigation.module.scss';

const Navigation = (props) => {
  const { currentSection, setCurrentSection } = props;

  return (
    <nav className={styles.navBar}>
      <Link href="/#hello" passHref replace>
        <NavigationLink
          changeSection={() => setCurrentSection(0)}
          isCurrentSection={currentSection == 0}
          className={styles.largeLink}
        >
          CHRISTOPHER KEI
        </NavigationLink>
      </Link>
      <Link href="/#about" passHref replace>
        <NavigationLink
          changeSection={() => setCurrentSection(1)}
          isCurrentSection={currentSection == 1}
          className={styles.smallLink}
        >
          ABOUT
        </NavigationLink>
      </Link>
      <Link href="/#work" passHref replace>
        <NavigationLink
          changeSection={() => setCurrentSection(2)}
          isCurrentSection={currentSection == 2}
          className={styles.smallLink}
        >
          WORK
        </NavigationLink>
      </Link>
      <Link href="/#contact" passHref replace>
        <NavigationLink
          changeSection={() => setCurrentSection(3)}
          isCurrentSection={currentSection == 3}
          className={styles.smallLink}
        >
          CONTACT
        </NavigationLink>
      </Link>
    </nav>
  );
};

export { Navigation };
