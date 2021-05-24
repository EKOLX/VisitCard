import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";

import Card from "../components/Card";
import colors from "../configs/colors";

function MainScreen(props) {
  const [loading, setLoading] = useState(true);
  const [visitCards, setVisitCards] = useState([]);

  const apiUrl = "https://visit-card-10b2b-default-rtdb.firebaseio.com";

  useEffect(() => {
    setLoading(true);
    fetch(`${apiUrl}/visitCards.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cards = [];

        for (const key in data) {
          for (const index in data[key]) {
            const card = {
              ...data[key][index],
            };
            cards.push(card);
          }
        }

        setVisitCards(cards);
        setLoading(false);
      });
  }, []);

  const dbHandler = () => {
    fetch(`${apiUrl}/visitCards.json`, {
      method: "POST",
      body: JSON.stringify(visitCards),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const navigationHandler = (detail) => {
    props.navigation.navigate("Details", detail);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={visitCards}
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
