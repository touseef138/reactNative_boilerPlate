import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  }),
  text: (colors) => ({
    fontSize: 30,
    color: colors.title,
    fontFamily: theme.fontFamily.bold,
  }),
});
