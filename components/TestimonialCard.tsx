import Image from 'next/image';
interface Props {
  src: string;
  title: string;
  subtitle: string;
}
function TestimonialCard({ src, title, subtitle }: Props) {
  return (
    <div className='flex flex-col items-center px-5 py-10'>
      <div className='relative h-32 w-32 '>
        <Image
          src={`${src}`}
          alt='testimonial'
          objectFit='contain'
          layout='fill'
        />
      </div>
      <h2 className='text-gray-700 text-center'>{title}</h2>
      <p className='text-gray-500 text-center'>{subtitle}</p>
    </div>
  );
}

export default TestimonialCard;
