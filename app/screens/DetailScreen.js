import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View, Alert } from "react-native";

import colors from "../configs/colors";

function DetailScreen(props) {
  const [profession, setProfession] = useState("Software Developer");

  const contactHandler = () =>
    Alert.alert("Contact", "Phone number: +1234567890", [{ text: "OK" }]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
      <View style={styles.header}>
        <Text>{profession}</Text>
        <Button title="Contact" onPress={contactHandler} />
      </View>
      <View style={styles.detail}>
        <Text>Name: Elkhan</Text>
        <Text>Price: 33$ per hour</Text>
      </View>
      <View style={styles.description}>
        <Text>Mobile application developer.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-start" },
  image: {
    width: "100%",
    height: 200,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  detail: { justifyContent: "center", alignItems: "center" },
  description: { padding: 10 },
});

export default DetailScreen;
