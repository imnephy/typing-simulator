import { isKeyboardCodeAllowed } from '@/utils/helpers';
import { useState, useRef, useCallback, useEffect } from 'react';

const useTypings = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState('');
  const totalTyped = useRef(0);

  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isKeyboardCodeAllowed(code)) {
        return;
      }

      switch (key) {
        case 'Backspace':
          setTyped((prev) => prev.slice(0, -1));
          setCursor(cursor - 1);
          totalTyped.current -= 1;
          break;

        default:
          setTyped((prev) => prev.concat(key));
          setCursor(cursor + 1);
          totalTyped.current += 1;
          break;
      }
    },
    [cursor, enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped('');
    setCursor(0);
  }, []);

  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0;
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    typed,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped: totalTyped.current,
  };
};

export default useTypings;
