import { FC, ReactElement } from 'react';

interface HeaderMenuItemProps {
  icon?: ReactElement;
  label: string;
  href: string;
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ icon, label, href }) => {
  return (
    <li>
      <a className="flex items-center justify-center gap-x-1 text__glowing hover:scale-105 transition-transform duration-500 ease-in-out" href={href}>
        {icon} 
        {label}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
