import TestimonialCard from './TestimonialCard';

function TestimonialRow() {
  return (
    <div className='px-8'>
      <div className='flex flex-col items-center'>
        <p>TESTIMONIALS</p>
        <h1 className='font-bold text-4xl text-center md:text-left'>
          Read What Other Have To Say
        </h1>
      </div>
      <div className='flex flex-col md:flex-row md:mx-14 md:px-5 md:py-3'>
        <TestimonialCard
          src='/asset/img-1.png'
          title='Andrew Rathore'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        />
        <TestimonialCard
          src='/asset/img-2.png'
          title='Vera Duncan'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        />
        <TestimonialCard
          src='/asset/img-3.png'
          title='Mark Smith'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        />
      </div>
    </div>
  );
}

export default TestimonialRow;
