import { useEffect, useRef } from 'react';

/**
 * CustomHook: Pour donner le focus sur le mount à un composant focusable
 * @returns Ref
 */
function useInitialFocus() {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  return inputRef;
}

export default useInitialFocus;
