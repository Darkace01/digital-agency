import Image from 'next/image';

function Companies() {
  return (
    <div className='text-center'>
      <h3 className='text-gray-500 mb-3'>Trusted by 4,000+ companies</h3>
      <div className='bg-gray-100 rounded-lg px-3 mx-4 flex space-x-4 md:justify-center md:bg-none'>
        <div className='relative w-24 h-24'>
          <Image
            src='/asset/sportify.png'
            alt='sportify'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative w-24 h-24'>
          <Image
            src='/asset/slack.png'
            alt='sportify'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative w-24 h-24'>
          <Image
            src='/asset/drop-box.png'
            alt='sportify'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative w-24 h-24'>
          <Image
            src='/asset/zoom.png'
            alt='sportify'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  );
}

export default Companies;
