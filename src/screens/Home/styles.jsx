import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  }),
  text: (colors) => ({
    fontSize: 30,
    color: colors.title,
    fontFamily: theme.fontFamily.medium,
    marginBottom: 60,
  }),
  selectContainer:{
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "75%",
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "black",
    borderWidth:2,
    borderColor:"green"
  },
});
