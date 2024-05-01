import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    primary: {
      100: "#9DECF9",
      200: "#0BC5EA",
    },
    secondary: {
      100: "#81E6D9",
      200: "#38B2AC",
    },
    gray: {
      100: "#E2E8F0",
      200: "#CBD5E0",
      300: "#A0AEC0",
    },
  },
});
