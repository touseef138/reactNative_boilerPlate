import React, { useCallback, useEffect } from "react";
import { StatusBar } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { SplashStack, HomeStack } from "./src/navigations";
import { observer } from "mobx-react";
import { store } from "./src/store";
import hydrateStores from "./src/store/hydrateStores";
import OfflineNotice from "./src/components/OfflineNotice";

export default observer(App);
function App() {
  const {
    isSplashShow,
    setIsInternet,
    isInternet,
    appTheme,
    setAppTheme,
    colors,
  } = store.GeneralStore;

  useEffect(() => {
    setAppTheme(appTheme);
  }, [appTheme]);

  useEffect(async () => {
    hydrateStores();
    const unsubscribeNetinfo = NetInfo.addEventListener((state) => {
      setIsInternet(state.isConnected);
    });
    return () => {
      unsubscribeNetinfo();
    };
  }, []);

  const StatusBarShow = useCallback(() => {
    return (
      <StatusBar
        barStyle={colors.statusBarStyle}
        backgroundColor={colors.background}
      />
    );
  }, [appTheme, colors]);

  return (
    <>
      <NavigationContainer>
        <StatusBarShow />
        {isSplashShow ? <SplashStack /> : <HomeStack />}
        {!isInternet && <OfflineNotice />}
      </NavigationContainer>
    </>
  );
}
