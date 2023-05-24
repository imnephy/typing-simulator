import { Outlet } from 'react-router-dom';
import { ReactComponent as GitHub } from '@/assets/github.svg';
import Navbar from '@/components/Navbar';
const RootLayout = () => {
  return (
    <>
      <header className="bg-[var(--secondary)] text-white py-4 px-5 flex flex-row justify-center">
        <Navbar />
      </header>
      <main className="flex-grow bg-red-500 flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <footer className="px-5 bg-[var(--secondary)] flex justify-center">
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
