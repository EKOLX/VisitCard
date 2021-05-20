import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../configs/colors";

function DetailScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.primary },
  image: {
    width: "100%",
    height: 300,
  },
});

export default DetailScreen;
