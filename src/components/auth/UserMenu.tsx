import { useState, useCallback, useEffect, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';
import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth() as IAuthContextValue;
  // dropdown open/close logic
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleOpen = useCallback(() => {
    setIsOpen((val) => !val);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  // ------------------------
  return (
    <div ref={dropdownRef} className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
          p-2
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          hover:bg-[var(--primary)]
          "
        >
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div
          className="
        absolute
        rounded-xl
        shadow-md
        bg-[var(--secondary)]
        overflow-hidden
        right-0
        top-12
        text-sm
        w-24
        z-10
        "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              {!currentUser ? (
                <>
                  <MenuItem onClick={toggleOpen} link="login" label="Login" />
                  <MenuItem onClick={toggleOpen} link="signup" label="Sign Up" />
                </>
              ) : (
                <MenuItem onClick={toggleOpen} link="dashboard" label="Profile" />
              )}
              {currentUser && (
                <>
                  <hr />
                  <MenuItem
                    className="text-red-500"
                    link="login"
                    onClick={() => {
                      logout();
                      toggleOpen();
                    }}
                    label="Logout"
                  />
                </>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
