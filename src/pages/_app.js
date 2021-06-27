import React, { useEffect } from 'react';
import Head from 'next/head';
import NavBar from '~/components/NavBar';
import { styled } from '@material-ui/core';
import { create } from 'jss';
import Layout from '~/components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

  });

  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
