import { createContext, useContext, useEffect, useState } from "react";

import { Theme } from "react-daisyui";
import { DataThemes, Themes } from "../lib/helpers/daisyUI.helper";
import { CgDarkMode } from "react-icons/cg";

import { Titillium_Web } from "next/font/google";

const font = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

const ThemeContext = createContext<
  Partial<{
    theme: DataThemes;
    setTheme: any;
    toggleTheme: any;
  }>
>({});

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<DataThemes>();

  useEffect(() => {
    // Retrieve the theme preference from localStorage if available
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as DataThemes);
    } else {
      setTheme(Themes.lighTheme);
    }
  }, []);

  const toggleTheme = () => {
    // Toggle between lighTheme and darkTheme themes
    setTheme((prevTheme) =>
      prevTheme === Themes.lighTheme ? Themes.darkTheme : Themes.lighTheme
    );
    localStorage.setItem(
      "theme",
      theme === Themes.lighTheme ? Themes.darkTheme : Themes.lighTheme
    );
  };

  if (!theme) {
    return <></>;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      <Theme dataTheme={theme} className={font.className}>
        {props.children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeProvider = () => useContext(ThemeContext);

export const ThemeSwitcher = ({
  className = "absolute top-5 right-5 z-500 cursor-pointer",
  children,
}: {
  className?: string;
  children?: any;
}) => {
  const { toggleTheme } = useThemeProvider();
  return (
    <div className={className} onClick={toggleTheme}>
      {children || <CgDarkMode className="text-32 text-base-100" />}
    </div>
  );
};
