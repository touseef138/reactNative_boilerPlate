import React, { useCallback ,useEffect} from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from "@react-navigation/native";
import { SplashStack, HomeStack } from "./src/navigations";
import { observer } from "mobx-react";
import {store} from "./src/store";
import OfflineNotice from "./src/components/OfflineNotice";

export default observer(App);
function App() {
  const isDarkMode = useColorScheme() === "dark";
  const { isSplashShow,setIsInternet,isInternet } =  store.GeneralStore;

  const StatusBarShow = useCallback(() => {
    return (
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={styles.statusBar(isDarkMode).backgroundColor}
      />
    );
  }, [isDarkMode]);

  useEffect(() => {
    const unsubscribeNetinfo = NetInfo.addEventListener(state => {
      setIsInternet(state.isConnected);
    });
    return () => {
      unsubscribeNetinfo();
    };
  }, []);

  return (
    <>
      <NavigationContainer>
        <StatusBarShow />
        {isSplashShow ? <SplashStack /> : <HomeStack />}
        {!isInternet   && <OfflineNotice />}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: (isDarkMode) => ({
    backgroundColor: isDarkMode ? "black" : "white",
  }),
});
