import React, { useCallback } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import config from "react-native-config";
import { observer } from "mobx-react";
import { store } from "../../store";
import { useTranslation } from "react-i18next";
import { languages } from "../../theme/languages";
import { themes } from "../../theme/themes";
import { vectorIcon } from "../../utils/vectorIcon";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default observer(Home);
function Home() {
  const touchOpacity = 0.7;
  const isFrom = config.APP_CONFIG ?? "";
  const { colors, setAppTheme, language, setLanguage, appTheme } =
    store.GeneralStore;
  const { t, i18n } = useTranslation();
  const env =
    isFrom === "development"
      ? t("env.development")
      : isFrom === "staging"
      ? t("env.staging")
      : t("env.prodcution");

  const onChangeLanguage = useCallback((item) => {
    i18n.changeLanguage(item.key);
    setLanguage(item);
  }, []);

  return (
    <SafeAreaView style={styles.container(colors)}>
      <Text style={styles.text(colors, language)}>
        {env} {t("env.enivronment")}
      </Text>

      <View style={styles.selectContainer}>
        {themes.map((item) => (
          <TouchableOpacity
            onPress={() => setAppTheme(item.name)}
            activeOpacity={touchOpacity}
            style={[styles.circle, { backgroundColor: item.backgroundColor }]}
          >
            {appTheme === item.name ? (
              <vectorIcon.AntDesign
                name={"check"}
                size={responsiveFontSize(4.7)}
                color={colors.selectedColor}
              />
            ) : null}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.languageText1(colors, language)}>
        {t("selectLanguage")}
      </Text>
      <View style={styles.languageConatiner}>
        {languages.map((item) => (
          <TouchableOpacity
            style={styles.itemConatiner}
            onPress={() => onChangeLanguage(item)}
            activeOpacity={touchOpacity}
          >
            <Text style={styles.languageText2(colors)}>{item.name}</Text>
            {language.name === item.name && (
              <vectorIcon.AntDesign
                style={styles.icon}
                name={"check"}
                size={responsiveFontSize(2.5)}
                color={colors.selectedColor}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}
