interface IDropDownLinkProps {
  handleClick: () => void;
  title: string;
}

export default function DropDownLink({
  handleClick,
  title,
}: IDropDownLinkProps) {
  return (
    <li className='w-full' onClick={handleClick}>
      <a className='w-full '>{title}</a>
    </li>
  );
}
