import { FiEdit2 } from 'react-icons/fi';

interface IValueInputProps {
  label?: string;
  value: string;
  handleClick: () => void;
  info?: string;
}

export default function ValueInput({
  label,
  value,
  handleClick,
  info,
}: IValueInputProps) {
  return (
    <div className='grid grid-cols-6 gap-x-4 py-4 md:gap-x-8'>
      <div className='col-span-2 text-right font-light'>{label}</div>
      <div className='col-span-4 flex items-center'>
        <span className='w-full font-bold'>{value}</span>
        <button
          className='btn btn-outline btn-square btn-xs'
          onClick={handleClick}
        >
          <FiEdit2 />
        </button>
      </div>
      <div className='col-span-4 col-start-3 text-sm font-light tracking-tight'>
        {info}
      </div>
    </div>
  );
}
