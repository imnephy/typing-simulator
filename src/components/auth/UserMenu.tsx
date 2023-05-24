import useRegisterModal from '@/hooks/useRegisterModal';
import { useState, useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((val) => !val);
  }, []);

  return (
    <div className="relative">
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
        right-2
        top-12
        text-sm
        w-[5vw]
        "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
