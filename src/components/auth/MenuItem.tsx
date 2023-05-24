import { NavLink } from 'react-router-dom';

interface MenuItemProps {
  onClick?: () => void;
  label: string;
  link: string;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, link, className }) => {
  if (label === 'Logout') {
    return (
      <div
        onClick={onClick}
        className={`
          ${className} 
          px-2
          py-3
          hover:bg-[var(--primary)]
          transition
          font-semibold
          rounded-none
        `}
      >
        {label}
      </div>
    );
  }
  return (
    <NavLink
      to={link}
      onClick={onClick}
      className={`
        px-2
        py-3
        hover:bg-[var(--primary)]
        transition
        font-semibold
        rounded-none
        ${className}
      `}
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
