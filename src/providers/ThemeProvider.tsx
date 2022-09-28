import React from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components/native";
import { theme } from "../theme";

export const ThemeProvider = ({ children }) => (
  <StyledComponentsProvider theme={theme}>{children}</StyledComponentsProvider>
);
