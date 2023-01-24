import type { Theme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const textStyle = (colors: Theme["colors"], color: string) =>
  StyleSheet.create({
    style: {
      fontWeight: "600",
      color: color || colors.text
    }
  }).style;
