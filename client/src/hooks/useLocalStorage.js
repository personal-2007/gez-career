import { useState } from 'react';
import { getItem, setItem } from '../utils/storage';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = getItem(key);
    return item !== null ? item : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    setItem(key, value);
  };

  return [storedValue, setValue];
};
