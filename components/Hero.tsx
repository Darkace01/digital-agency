import Image from 'next/image';
import Button from './Button';

function Hero() {
  return (
    <div className='flex flex-col py-6'>
      <div className='max-w-sm mx-auto space-y-6 py-8'>
        <h1 className='font-bold text-3xl text-center'>
          Building digital products, brands & experience
        </h1>
        <p className='text-center'>
          Digital Agency is your online team mangement tool that easy and prompt
        </p>
        <div className='flex justify-center'>
          <Button title='Contact Us' />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='relative h-80 w-80'>
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
