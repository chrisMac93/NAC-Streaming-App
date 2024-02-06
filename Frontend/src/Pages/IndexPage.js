import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import Category from "../components/Category";
import FeaturedFilm from "../components/FeaturedFilm";

import styles from '../../styles/pages/IndexPageStyles';

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

export default IndexPage;
