import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import Category from "../components/Category";
import FeaturedFilm from "../components/FeaturedFilm";

const IndexPage = () => {
  //Dummy categories
  const categories = [
    "Money Tree Exclusives",
    "New Releases",
    "Continue Watching",
    "Picked For You",
    "Because you watched",
    "Popular On Money Tree",
    "Top Independent Filmmakers",
    "Bingeworthy",
  ];

  return (
    <View style={styles.container}>
      <ToolBar style={styles.toolbar} />
      <ScrollView style={styles.scrollContainer}>
        <FeaturedFilm />
        {categories.map((category, index) => (
          <Category key={index} title={category} />
        ))}
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContainer: {
    flex: 1,
  },
});

export default IndexPage;
