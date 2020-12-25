import React, { useState } from 'react';

import Head from 'next/head';

import { Navigation } from '../components/navigation';
import { HelloSection } from '../components/hello-section';
import { AboutSection } from '../components/about-section';
import { WorkSection } from '../components/work-section';
import { ContactSection } from '../components/contact-section';
import { Footer } from '../components/footer';

import styles from '../styles/index.module.scss';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <HelloSection setCurrentSection={setCurrentSection} />
      <AboutSection setCurrentSection={setCurrentSection} />
      <WorkSection setCurrentSection={setCurrentSection} />
      <ContactSection setCurrentSection={setCurrentSection} />
      <Footer />
    </div>
  );
}
