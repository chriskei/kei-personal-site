import React from 'react';

import styles from '../styles/section.module.scss';

const Section = (props) => {
  const { id, children } = props;

  return (
    <div id={id} className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
