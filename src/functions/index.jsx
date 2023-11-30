import theme from "../theme";

 
const getTheme = (val) => {
  return val === "white"
    ? theme.colors.whiteTheme
    : val === "black"
    ? theme.colors.blackTheme
    : theme.colors.orangeTheme;
};

 
export default{
  getTheme
}