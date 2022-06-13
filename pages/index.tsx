import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Digital Agency</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='backdrop-blur-lg bg-gradient-to-br from-theme/95 via-white to-white'>
        <Header />
        <Hero />
      </section>
    </div>
  );
};

export default Home;
