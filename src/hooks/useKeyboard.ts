import { useEffect, useRef } from 'react';

type KeyMap = { [key: string]: (event: KeyboardEvent) => void };

const useKeyboard = (keyMap: KeyMap) => {
  const keyMapRef = useRef(keyMap);

  useEffect(() => {
    keyMapRef.current = keyMap;
  }, [keyMap]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const handler = keyMapRef.current[event.key];
      if (handler) {
        handler(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default useKeyboard;