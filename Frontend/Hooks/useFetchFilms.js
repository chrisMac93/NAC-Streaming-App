import { useState, useEffect } from "react";
import axios from "axios";

const useFetchFilms = (category) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const options = {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/`, // Update URL as needed
        params: {genre: category, limit: 10},
        headers: {
          "X-RapidAPI-Key":
            "0dd917e765mshc0f1f4f8929ef77p100245jsndb1e2a7ca1ab",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data && response.data.results) {
          // Map over the results and extract the image URLs
          const filmData = response.data.results.map(film => ({
            id: film._id,
            imageUrl: film.primaryImage?.url,
          }));
          console.log("Data retrieved: ", filmData);
          setFilms(filmData);
        }
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, [category]);

  console.log("Data: ", films);
  return films;
};

export default useFetchFilms;
