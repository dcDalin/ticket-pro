interface IDropDownLinkProps {
  handleClick: () => void;
  title: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

export default function DropDownLink({
  handleClick,
  title,
  icon,
  loading,
}: IDropDownLinkProps) {
  return (
    <>
      {loading ? (
        <li className='w-full'>
          <a className='h-10 w-full animate-pulse bg-gray-100'></a>
        </li>
      ) : (
        <li className='w-full' onClick={handleClick}>
          <a className='w-full'>
            {icon}
            {title}
          </a>
        </li>
      )}
    </>
  );
}
