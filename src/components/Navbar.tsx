import { NavLink, useNavigate } from 'react-router-dom';
import UserMenu from './auth/UserMenu';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="max-w-screen-2xl w-full flex gap-[16px] justify-end mx-auto">
      <h1
        onClick={() => navigate('/')}
        className="mr-auto border-b-[3px] border-[var(--primary)] w-fit leading-8 text-[20px] cursor-pointer"
      >
        Touch typing simulator
      </h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="playground">Play!</NavLink>
      <UserMenu />
    </nav>
  );
};

export default Navbar;
