import type { Colors } from "libraries/theme";

export const categoryItems = (colors: Colors) => [
  {
    text: "All"
  },
  {
    bg: colors.orange,
    textProps: { color: "white" },
    text: "Meat Item",
    ml: 10,
    source: require("public/static/images/food-icons/meat.png")
  },
  {
    ml: 10,
    source: require("public/static/images/food-icons/frying-pan.png")
  },
  {
    ml: 10,
    source: require("public/static/images/food-icons/shrimp.png")
  }
];
