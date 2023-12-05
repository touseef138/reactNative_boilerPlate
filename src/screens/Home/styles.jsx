import { StyleSheet } from "react-native";
import theme from "../../theme";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 20,
  }),
  text: (colors, language) => ({
    fontSize: responsiveFontSize(3.5),
    color: colors.title,
    fontFamily: theme.fontFamily.bold,
    textAlign: language.position,
    textTransform: "capitalize",
  }),
  selectContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "75%",
    marginTop: responsiveFontSize(8),
  },
  circle: {
    width: responsiveFontSize(8),
    height: responsiveFontSize(8),
    borderRadius: responsiveFontSize(8) / 2,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  languageConatiner: {
    alignItems: "center",
    justifyContent: "center",
  },
  languageText1: (colors, language) => ({
    fontSize: responsiveFontSize(3),
    color: colors.title,
    fontFamily: theme.fontFamily.bold,
    textAlign: language.position,
    marginTop: responsiveFontSize(8),
    marginBottom: responsiveFontSize(6),
  }),
  itemConatiner: {
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    marginTop: responsiveFontSize(2),
  },
  languageText2: (colors) => ({
    fontSize: responsiveFontSize(2.5),
    color: colors.title,
    fontFamily: theme.fontFamily.medium,
  }),
  icon:{
  position:"absolute",
  right:0
  }
});
