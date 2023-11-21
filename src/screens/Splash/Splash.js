import React, { useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles";

export default Splash;
function Splash() {
  
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Splash Screen</Text>
    </SafeAreaView>
  );
}
