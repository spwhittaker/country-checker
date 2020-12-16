import { useState, useEffect } from "react";
export const useLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);
  const valueString = JSON.stringify(value);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, valueString]);
  return [value, setValue];
};

//Thanks to this tutorial https://typeofnan.dev/using-local-storage-in-react-with-your-own-custom-uselocalstorage-hook/
