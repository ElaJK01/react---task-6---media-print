import { useEffect, useState } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  useEffect(() => {
    const storageTheme = window.localStorage.getItem("theme");
    storageTheme && setTheme(storageTheme);
  }, []);
  return [theme, themeToggler];
};

export default useThemeMode;
