import Image from 'next/image';
import { ArrowDownIcon, ArrowRightIcon } from '@heroicons/react/outline';

interface Props {
  title: string;
  subtitle?: string;
  image?: string;
  reverse?: boolean;
}
function Branding({ title, subtitle, image, reverse }: Props) {
  return (
    <div
      className={` flex flex-col md:${
        reverse ? 'flex-row-reverse' : 'flex-row'
      }  py-6 md:justify-center md:items-center`}
    >
      <div className='max-w-sm md:max-w-md mx-auto md:mx-0 md:items-center space-y-6 py-8 pl-10'>
        <h1 className='font-bold text-4xl text-center md:text-left'>{title}</h1>
        <p className='text-center md:text-left'>{subtitle}</p>
        <div className='flex justify-center md:justify-start'>
          <ArrowDownIcon className='h-5 w-5 md:hidden' />
          <ArrowRightIcon className='h-5 w-5 hidden md:inline' />
        </div>
      </div>
      <div className='flex justify-center md:max-w-lg'>
        <div className='relative h-96 w-96'>
          <Image
            src={image}
            alt='hero'
            layout='fill'
            objectFit='contain'
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Branding;
