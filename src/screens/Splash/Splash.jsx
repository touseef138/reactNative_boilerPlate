import React, { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { observer } from "mobx-react";
import { store } from "../../store";
import hydrateStores from "../../store/hydrateStores";

export default observer(Splash);
function Splash() {
  const { splashTimeout, setIsSplashShow } = store.GeneralStore;

  useEffect(() => {
    hydrateStores().then(() => {
      setTimeout(() => {
        setIsSplashShow(false);
      }, splashTimeout);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Splash Screen</Text>
    </SafeAreaView>
  );
}
