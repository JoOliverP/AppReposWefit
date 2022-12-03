import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import GroupCardRepositories from "../../components/GroupCardRepositories";
import { RepositoryContext } from "../../context/repository";
import { Container } from "./styles";

const Favorites = () => {
  const { repositories, favorites } = useContext(RepositoryContext);
  const [favoritesRepositories, setFavoritesRepositories] = useState([]);

  // const getFavoritesRepositories = async () => {
  //   const favoritesRepositories = await AsyncStorage.getItem("@favorites");
  // };

  // useEffect(() => {
  //   getFavoritesRepositories();
  // }, []);
  return (
    <Container>
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </Container>
  );
};

export default Favorites;
