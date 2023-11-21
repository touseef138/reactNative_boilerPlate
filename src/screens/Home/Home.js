import React, { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import config from "react-native-config";

export default Home;
function Home() {
  const isFrom = config.APP_CONFIG;

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{`I am from ${isFrom}`}</Text>
    </SafeAreaView>
  );
}
