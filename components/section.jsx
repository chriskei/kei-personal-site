import React from 'react';

import styles from '../styles/section.module.scss';

const Section = (props) => {
  const { id, changeSection, children } = props;

  return (
    <div id={id} onMouseOver={() => changeSection()} className={styles.section}>
      {children}
    </div>
  );
};

export { Section };
