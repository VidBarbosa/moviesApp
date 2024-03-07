import { NavLink } from "react-router-dom";

interface Props {
  href: string;
  title: string;
  subTitle: string;
}

export const SideMenuItem = ({ href, title, subTitle }: Props) => {
  return (
    <NavLink key={href} to={href} end>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </NavLink>
  );
};
