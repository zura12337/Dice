import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  return initialValue;
}

export default function useLocalStorage(initialValue) {
  const [value, setValue] = useState(() =>
    getSavedValue("stats", initialValue)
  );

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
