import type { FC, ReactNode } from "react";
import { createContext, useContext } from "react";

export const colors = {
  white: "#ffffff",
  grey: "#c3c2c6",
  lightGrey: "#F5F3F1",
  orange: "#FC6E3B",
  red: "#E94345"
};

export type Colors = typeof colors;

export const typography = {
  fontFamily: "Open Sans",
  fontSize: 14,
  fontWeight: "normal"
};

type ThemeContextProps = {
  colors: Colors;
};

const themeContext = createContext<ThemeContextProps>({ colors });

export const useTheme = () => useContext(themeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ ...props }) => (
  <themeContext.Provider value={{ colors }}>{props.children}</themeContext.Provider>
);
