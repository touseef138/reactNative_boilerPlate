import { observer } from "mobx-react";
import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { store } from "../store";
import theme from "../theme";

const OfflineNotice = observer(() => {
  const { colors } = store.GeneralStore;
  return (
    <View style={styles.container(colors)}>
      <Text style={styles.text(colors)}>No internet connection</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: (colors) => ({
    backgroundColor: colors.offlineNoticeContainer,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  }),
  text: (colors) => ({
    color: colors.offlineNoticeText,
    fontSize: 16,
    fontFamily:theme.fontFamily.medium,
    letterSpacing: 1,
  }),
});

export default memo(OfflineNotice);
