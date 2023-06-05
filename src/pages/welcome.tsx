import { FirstSection, Footer, HeaderBar } from '@/components';
import SecondSection from '@/components/page_components/Welcome/SecondSection';
import Head from 'next/head';
import React from 'react';

const WelcomePage = () => {
  return (
    <>
      <Head>
        <title>CodeSeer</title>
      </Head>

      <div className='min-h-screen'>
        <HeaderBar location='home' />
        <main>
          <FirstSection />
          <SecondSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WelcomePage;