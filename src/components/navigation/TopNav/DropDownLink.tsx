interface IDropDownLinkProps {
  handleClick: () => void;
  title: string;
  icon?: React.ReactNode;
}

export default function DropDownLink({
  handleClick,
  title,
  icon,
}: IDropDownLinkProps) {
  return (
    <li className='w-full' onClick={handleClick}>
      <a className='w-full'>
        {icon}
        {title}
      </a>
    </li>
  );
}
