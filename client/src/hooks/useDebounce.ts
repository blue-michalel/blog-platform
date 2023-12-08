/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';

export const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay = 500): T => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  return useCallback<any>(
    (...args: any[]) => {
      typeof timeout.current !== 'undefined' && clearTimeout(timeout.current);

      timeout.current = setTimeout(() => callback(...args), delay);
      return () => clearTimeout(timeout.current);
    },
    [callback, delay]
  );
};
