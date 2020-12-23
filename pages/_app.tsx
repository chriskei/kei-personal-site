import React from 'react';
import '../styles/globals.css';

interface MyAppProps {
  Component: any;
  pageProps: any;
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default MyApp;
