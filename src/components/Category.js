import React from "react";
import { View, FlatList, Image, Text } from "react-native";

import styles from '../../styles/components/CategoryStyles';

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


export default Category;
