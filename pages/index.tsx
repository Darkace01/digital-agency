import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Branding from '../components/Branding';
import Companies from '../components/Companies';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TestimonialRow from '../components/TestimonialRow';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Digital Agency</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className='backdrop-blur-lg bg-gradient-to-br from-theme/30 via-white to-white'>
          <Header />
          <Hero />
        </section>
        <section className='bg-white'>
          <Companies />
        </section>
        <section className='backdrop-blur-lg bg-gradient-to-r from-white via-white to-theme/30 mt-3'>
          <Branding
            title='Branding & Design system'
            image='/asset/designer-team-working-on-creative-design.png'
            reverse={true}
            subtitle='Commonly used in the graphic, print & publishing industris for
          previewing visual layout and mockups'
          />
          <Branding
            title='Custome & Plugin Development'
            image='/asset/businessman-analyzing-data.png'
            reverse={false}
            subtitle='Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups'
          />
        </section>
        <section>
          <TestimonialRow />
        </section>
      </main>
    </div>
  );
};

export default Home;
