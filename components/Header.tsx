import { MenuIcon } from '@heroicons/react/solid';
function Header() {
  return (
    <div className='grid grid-cols-2 px-3 py-4'>
      <div className='cursor-pointer'>
        <h1 className='font-bold'>DIGITAL AGENCY</h1>
      </div>
      <div className='hidden md:flex grow justify-end cursor-pointer space-x-8'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Testimonials</a>
        <a href='#'>Contact</a>
      </div>
      <div className='md:hidden grow flex justify-end cursor-pointer'>
        <MenuIcon className='h-7' />
      </div>
    </div>
  );
}

export default Header;
