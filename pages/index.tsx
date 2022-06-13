import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Companies from '../components/Companies';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Digital Agency</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='backdrop-blur-lg bg-gradient-to-br from-theme/95 via-white to-white'>
          <Header />
          <Hero />
        </section>
        <section className='bg-white'>
          <Companies />
        </section>
      </main>
    </div>
  );
};

export default Home;
