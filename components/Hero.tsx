import Image from 'next/image';
import Button from './Button';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row py-6'>
      <div className='max-w-sm md:max-w-md/2 mx-auto space-y-6 py-8'>
        <h1 className='font-bold text-5xl text-center md:text-left'>
          Building digital products, brands & experience
        </h1>
        <p className='text-center md:text-left'>
          Digital Agency is your online team mangement tool that easy and prompt
        </p>
        <div className='flex justify-center md:justify-start'>
          <Button title='Contact Us' />
        </div>
      </div>
      <div className='flex justify-center md:max-w-lg'>
        <div className='relative h-96 w-96'>
          <Image
            src='/asset/hero.png'
            alt='hero'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
