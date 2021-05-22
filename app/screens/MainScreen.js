import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";

import Card from "../components/Card";
import colors from "../configs/colors";

function MainScreen(props) {
  const data = [
    {
      id: 1,
      profession: "Software Engineer",
      name: "Elkhan",
      price: "33",
      currency: "USD",
      isPerHour: true,
    },
    {
      id: 2,
      profession: "Film Director",
      name: "Nancy",
      price: "100",
      currency: "USD",
      isPerHour: true,
    },
    {
      id: 3,
      profession: "Game Developer",
      name: "Rasul",
      price: "3000",
      currency: "USD",
      isPerHour: false,
    },
    {
      id: 4,
      profession: "DJ",
      name: "Echo",
      price: "66",
      currency: "USD",
      isPerHour: true,
    },
    {
      id: 5,
      profession: "Motivator",
      name: "Lee",
      price: "10",
      currency: "USD",
      isPerHour: true,
    },
    {
      id: 6,
      profession: "Musician",
      name: "Timur",
      price: "77",
      currency: "USD",
      isPerHour: true,
    },
  ];

  const navigationHandler = (detail) => {
    props.navigation.navigate("Details", detail);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={data}
        renderItem={(itemData) => (
          <Card item={itemData.item} onTap={navigationHandler} />
        )}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerTitle: {
    alignSelf: "center",
    color: colors.primary,
    fontSize: 22,
    marginVertical: 10,
  },
});

export default MainScreen;
