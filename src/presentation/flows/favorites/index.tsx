import React, { useContext } from "react";
import { FlatList } from "react-native";
import GroupCardRepositories from "../../components/GroupCardRepositories";
import { RepositoryContext } from "../../context/repository";
import { Container, Text } from "./styles";

const Favorites = () => {
  const { repositories } = useContext(RepositoryContext);
  return (
    <Container>
      <FlatList
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <GroupCardRepositories displayButtonFavorite={false} data={item} />
        )}
      />
    </Container>
  );
};

export default Favorites;
