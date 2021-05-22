import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import colors from "../configs/colors";

function Card(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onTap.bind(this, props.item)}
    >
      <View style={styles.card}>
        <View style={styles.leftBlock}>
          <Image
            style={styles.image}
            source={{
              uri: "https://picsum.photos/200/300",
            }}
          />
        </View>
        <View style={styles.rightBlock}>
          <Text>{props.item.profession}</Text>
          <Text>Name: {props.item.name}</Text>
          <Text>
            Price: {props.item.price} {props.item.currency}{" "}
            {props.item.isPerHour ? "per hour" : "per month"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    height: 140,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.secondary,
    borderColor: "#e67e22",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    elevation: 8,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  leftBlock: {
    flex: 0.4,
    marginRight: 10,
  },
  rightBlock: {
    flex: 0.6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Card;
