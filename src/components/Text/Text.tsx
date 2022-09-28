import React from "react";
import { Text as PaperText } from "react-native-paper";
import { theme } from "../../theme";
import { TextProps, TextSize, TextWeight } from "./types";

export const Text = ({
  children,
  color = theme.colors.white,
  size = TextSize.Size16,
  weight = TextWeight.Medium,
  ...style
}: TextProps) => {
  return (
    <PaperText style={{ color, fontSize: size, fontFamily: weight, ...style }}>
      {children}
    </PaperText>
  );
};
