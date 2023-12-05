import theme from "../theme";

export const   getTheme = (val) => {
  return val === "white"
    ? theme.colors.whiteTheme
    : val === "black"
    ? theme.colors.blackTheme
    : theme.colors.purpleTheme;
};

 