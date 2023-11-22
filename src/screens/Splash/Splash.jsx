import React, { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { observer } from "mobx-react";
import { store } from "../../store";

export default observer(Splash);
function Splash() {
  const { splashTimeout, setIsSplashShow, colors } = store.GeneralStore;

  useEffect(() => {
    setTimeout(() => {
      setIsSplashShow(false);
    }, splashTimeout);
  }, []);

  return (
    <SafeAreaView style={styles.container(colors)}>
      <Text style={styles.text(colors)}>Splash Screen</Text>
    </SafeAreaView>
  );
}
