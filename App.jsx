import React, { useCallback, useEffect, useState } from "react";
import { StatusBar, StyleSheet, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SplashStack, HomeStack } from "./src/navigations";

function App() {
  const splashTimeout = 2000;
  const isDarkMode = useColorScheme() === "dark";

  const [isSplashShow, setIsSplashShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashShow(false);
    }, splashTimeout);
  }, []);

  const StatusBarShow = useCallback(() => {
    return (
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={styles.statusBar(isDarkMode).backgroundColor}
      />
    );
  }, [isDarkMode]);

  return (
    <>
      <NavigationContainer>
        <StatusBarShow />
        {isSplashShow ? <SplashStack /> : <HomeStack />}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  statusBar: (isDarkMode) => ({
    backgroundColor: isDarkMode ? "black" : "white",
  }),
});

export default App;
