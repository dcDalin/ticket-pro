import { useRouter } from 'next/router';

interface ITopNavItemProps {
  title: string;
  icon: React.ReactNode;
  path: string;
}

export default function TopNavItem({ title, icon, path }: ITopNavItemProps) {
  const router = useRouter();

  return (
    <div
      className={`btn btn-ghost flex  h-full cursor-pointer items-center space-x-1 rounded-none border-b-2 px-4 ${
        router.pathname === path &&
        'cursor-default border-0 border-b-2 border-primary hover:border-b-2 hover:border-b-primary hover:bg-transparent'
      }`}
      onClick={() => router.push(path)}
    >
      {icon}
      <div>{title}</div>
    </div>
  );
}
