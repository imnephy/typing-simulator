import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as GitHub } from '@/assets/github.svg';
import UserMenu from '@/components/auth/UserMenu';
const RootLayout = () => {
  return (
    <>
      <header className="bg-[var(--secondary)] text-white py-4 px-5 flex flex-row justify-center">
        <nav className="max-w-screen-2xl w-full flex gap-[16px] justify-end mx-auto">
          <h1 className="mr-auto border-b-[3px] border-[var(--primary)] w-fit leading-8 text-[20px]">
            Touch typing simulator
          </h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="playground">Play!</NavLink>
          <NavLink to="signup">Sign up</NavLink>
          <NavLink to="login">Log in</NavLink>
          <NavLink to="dashboard">Profile</NavLink>
          <UserMenu />
        </nav>
      </header>
      <main className="flex-grow bg-red-500 flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <footer className="px-5 bg-[var(--secondary)] flex justify-center">
        <hr />
        <div>
          <a href="https://github.com/imnephy/touch-typing-simulator">
            <GitHub className="scale-50" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
