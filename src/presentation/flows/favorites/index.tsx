import React, { useContext } from "react";
import { FlatList } from "react-native";
import GroupCardRepositories from "../../components/GroupCardRepositories";
import { RepositoryContext } from "../../context/repository";
import { Container } from "./styles";

const Favorites = () => {
  const { favorites } = useContext(RepositoryContext);

  return (
    <Container>
      <FlatList
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <GroupCardRepositories data={item} displayButtonFavorite={false} />
        )}
      />
    </Container>
  );
};

export default Favorites;
