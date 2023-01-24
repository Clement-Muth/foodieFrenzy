import type { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const boxStyle = (colors: Theme["colors"]) =>
  StyleSheet.create({
    style: {
      color: colors.text
    }
  }).style;
