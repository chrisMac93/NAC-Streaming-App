import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import NavBar from "../components/NavBar";
import ToolBar from "../components/ToolBar";

import styles from '../../styles/pages/CategoriesPageStyles';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("action"); // Default category
  const [modalVisible, setModalVisible] = useState(false);
  const categories = [
    "horror",
    "sciFi",
    "action",
    "comedy",
    "drama",
    "fantasy",
    "romance",
    "thriller",
    "documentary",
    "animation",
  ]; // Your categories
  const films = {
    action: new Array(10).fill(null).map((_, index) => ({
      id: `action-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=action${index}`,
      title: `Action Film ${index + 1}`,
    })),
    drama: new Array(10).fill(null).map((_, index) => ({
      id: `drama-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=drama${index}`,
      title: `Drama Film ${index + 1}`,
    })),
    comedy: new Array(10).fill(null).map((_, index) => ({
      id: `comedy-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=comedy${index}`,
      title: `Comedy Film ${index + 1}`,
    })),
    documentary: new Array(10).fill(null).map((_, index) => ({
      id: `documentary-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=documentary${index}`,
      title: `Documentary Film ${index + 1}`,
    })),
    // Add more categories as needed
    horror: new Array(10).fill(null).map((_, index) => ({
      id: `horror-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=horror${index}`,
      title: `Horror Film ${index + 1}`,
    })),
    sciFi: new Array(10).fill(null).map((_, index) => ({
      id: `sciFi-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=sciFi${index}`,
      title: `Sci-Fi Film ${index + 1}`,
    })),
    fantasy: new Array(10).fill(null).map((_, index) => ({
      id: `fantasy-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=fantasy${index}`,
      title: `Fantasy Film ${index + 1}`,
    })),
    romance: new Array(10).fill(null).map((_, index) => ({
      id: `romance-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=romance${index}`,
      title: `Romance Film ${index + 1}`,
    })),
    thriller: new Array(10).fill(null).map((_, index) => ({
      id: `thriller-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=thriller${index}`,
      title: `Thriller Film ${index + 1}`,
    })),
    animation: new Array(10).fill(null).map((_, index) => ({
      id: `animation-${index}`,
      imageUrl: `https://source.unsplash.com/random/120x180?sig=animation${index}`,
      title: `Animation Film ${index + 1}`,
    })),
  };

  const addPlaceholders = (items, numColumns) => {
    const numberOfRows = Math.ceil(items.length / numColumns);
    const totalNeeded = numberOfRows * numColumns;
    const placeholdersCount = totalNeeded - items.length;
    const placeholders = new Array(placeholdersCount).fill({
      isPlaceholder: true,
    });

    return [...items, ...placeholders];
  };

  Object.keys(films).forEach((category) => {
    films[category] = addPlaceholders(films[category], 3);
  });

  const renderItem = ({ item }) => {
    if (item.isPlaceholder) {
      // Render an empty view for placeholders
      return <View style={[styles.film, styles.placeholder]} />;
    }

    return (
      <View style={styles.film}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ToolBar />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Select Category</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.modalItem}
              onPress={() => {
                setSelectedCategory(category);
                setModalVisible(false);
              }}
            >
              <Text style={styles.modalText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      <FlatList
        data={films[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
      <NavBar />
    </View>
  );
};

export default CategoriesPage;
