import { TextStyle } from "react-native";

export enum TextSize {
  Size10 = 10,
  Size12 = 12,
  Size14 = 14,
  Size16 = 16,
  Size20 = 20,
}

export enum TextWeight {
  Light = "Roboto_300Light",
  Regular = "Roboto_400Regular",
  Medium = "Roboto_500Medium",
  Bold = "Roboto_700Bold",
  Black = "Roboto_900Black",
}

export interface TextProps {
  children: number | string;
  color?: string;
  size?: TextSize;
  weight?: TextWeight;
  style?: TextStyle;
}
