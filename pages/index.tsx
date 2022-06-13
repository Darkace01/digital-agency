import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Digital Agency</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='backdrop-blur-sm bg-gradient-to-r from-theme/95 to-white'>
        <Header />
      </section>
    </div>
  );
};

export default Home;
