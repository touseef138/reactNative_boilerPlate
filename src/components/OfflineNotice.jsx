import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";

function OfflineNotice() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No internet connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default memo(OfflineNotice);
