interface Props {
  title: string;
}
function Button({ title }: Props) {
  return (
    <button className='bg-theme text-white px-10 py-2 rounded-lg shadow-sm transition duration-150 ease-out cursor-pointer hover:text-white/60 text-lg'>
      {title}
    </button>
  );
}

export default Button;
