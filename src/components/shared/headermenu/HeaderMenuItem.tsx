import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface HeaderMenuItemProps {
  icon?: ReactElement;
  label: string;
  to: string;
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ icon, label, to }) => {
  return (
    <li>
      {/* Utiliza `to` para especificar el destino del enlace */}
      <Link to={to} className="flex items-center justify-center gap-x-1 text__glowing hover:scale-105 transition-transform duration-500 ease-in-out">
        {icon}
        {label}
      </Link>
    </li>
  );
};

export default HeaderMenuItem;
