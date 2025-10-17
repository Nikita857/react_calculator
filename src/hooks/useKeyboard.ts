import { useEffect } from "react";

type keyMap = {[key: string]: (event: KeyboardEvent) => void};

const useKeyboard = (keyMap: keyMap) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const handler = keyMap[event.key];
            if(handler) {
                handler(event)
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {window.addEventListener('keydown', handleKeyDown);};
    }, [keyMap]);
};

export default useKeyboard;

