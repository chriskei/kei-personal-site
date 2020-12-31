import React, { useState } from 'react';
import Head from 'next/head';

import Navigation from '../components/navigation';
import HelloSection from '../components/hello-section';
import AboutSection from '../components/about-section';
import WorkSection from '../components/work-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import styles from '../styles/index.module.scss';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState('red');
  const determineSection = (scrollTopPixels) => {
    setCurrentPosition(scrollTopPixels);
    const scrollTopRem = scrollTopPixels / 16;
    const sectionBreakpoints = [55, 105, 155, 205];
    for (let i = 0; i < 4; i += 1) {
      const sectionBreakpoint = sectionBreakpoints[i];
      if (scrollTopRem < sectionBreakpoint) {
        setCurrentSection(i);
        break;
      }
    }
  };
  const determineColor = (scrollTopPixels) => {
    const scrollTopRem = scrollTopPixels / 16;
    const sectionBreakpoints = [55, 105, 155, 205];
    const colorMap = ['red', 'yellow', 'green', 'blue'];
    for (let i = 0; i < 4; i += 1) {
      const sectionBreakpoint = sectionBreakpoints[i];
      if (scrollTopRem < sectionBreakpoint) {
        setCurrentBackgroundColor(colorMap[i]);
        break;
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: currentBackgroundColor,
      }}
      className={styles.container}
      onScroll={(e) => {
        determineSection(e.target.scrollTop);
        determineColor(e.target.scrollTop);
      }}
    >
      <Head>
        <title>Christopher Kei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        currentSection={currentSection}
        color={currentBackgroundColor}
      />
      <HelloSection position={currentPosition} />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
