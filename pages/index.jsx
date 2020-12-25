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
        <title>Christopher Kei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <HelloSection changeSection={() => setCurrentSection(0)} />
      <AboutSection changeSection={() => setCurrentSection(1)} />
      <WorkSection changeSection={() => setCurrentSection(2)} />
      <ContactSection changeSection={() => setCurrentSection(3)} />
      <Footer />
    </div>
  );
}
