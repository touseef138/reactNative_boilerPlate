import React, { useEffect } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import config from "react-native-config";
import { observer } from "mobx-react";
import { store } from "../../store";

export default observer(Home);
function Home() {
  const isFrom = config.APP_CONFIG ?? "";
  const { colors, setAppTheme } = store.GeneralStore;

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container(colors)}>
      <Text style={styles.text(colors)}>{`I am from ${isFrom}`}</Text>

      <View style={styles.selectContainer}>
        <TouchableOpacity
          onPress={() => setAppTheme("black")}
          activeOpacity={0.6}
          style={[styles.circle, { backgroundColor: "black" }]}
        />
        <TouchableOpacity
          onPress={() => setAppTheme("white")}
          activeOpacity={0.6}
          style={[styles.circle, { backgroundColor: "white" }]}
        />
        <TouchableOpacity
          onPress={() => setAppTheme("orange")}
          activeOpacity={0.6}
          style={[styles.circle, { backgroundColor: "orange" }]}
        />
      </View>
    </SafeAreaView>
  );
}
