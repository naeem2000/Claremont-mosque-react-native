import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
