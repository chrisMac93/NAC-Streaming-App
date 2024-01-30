import React from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";

const Category = ({ title }) => {
  // Generating unique film images based on category title and index
  const films = new Array(10).fill(null).map((_, index) => ({
    id: `${title}-${index}`,
    imageUrl: `https://source.unsplash.com/random/120x180?sig=${title}${index}`,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={films}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 180,
    marginRight: 10,
    borderRadius: 8,
  },
});

export default Category;
